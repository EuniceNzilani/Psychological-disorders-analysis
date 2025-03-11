import React, { useState, useEffect } from 'react';
import { 
  Bell, User, Users, ActivitySquare, Settings, LogOut, X, 
  ChevronRight, Moon, Shield, FileText, Calendar, UserCircle
} from 'lucide-react';
import { getAuth, signOut } from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,  // Using setDoc instead of updateDoc
  collection, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import "./ProfilePopup.css";

function ProfilePopup({ onClose, onThemeToggle, isDarkMode }) {
  const [activeSection, setActiveSection] = useState('main');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profileFormData, setProfileFormData] = useState({
    fullName: '',
    phoneNumber: '',
    bio: ''
  });
  const [notifications, setNotifications] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  
  // Default profile image as a fallback
  const DEFAULT_PROFILE_IMAGE = '/assets/images/default-avatar.jpg';
  
  // Fetch user data from Firestore when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) {
        setErrorMessage('No authenticated user found.');
        setIsLoading(false);
        return;
      }
      
      try {
        setIsLoading(true);
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log("User Data from Firestore:", userData);
          console.log("User Display Name from Auth:", auth.currentUser.displayName);

          // Set user data state
          setUserData({
            name: userData.fullName || auth.currentUser.displayName || 'User',
            email: auth.currentUser.email,
            image: userData.profileImage || auth.currentUser.photoURL || DEFAULT_PROFILE_IMAGE,
            memberSince: userData.memberSince ? new Date(userData.memberSince.toDate()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'New Member',
            plan: userData.subscriptionPlan || 'Free',
            streak: userData.streak || 0,
            phoneNumber: userData.phoneNumber || '',
            bio: userData.bio || '',
            nextSession: userData.nextSession ? new Date(userData.nextSession.toDate()).toLocaleString('en-US', { 
              weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true 
            }) : 'No upcoming sessions'
          });
          
          // Set profile form data
          setProfileFormData({
            fullName: userData.fullName || auth.currentUser.displayName || '',
            phoneNumber: userData.phoneNumber || '',
            bio: userData.bio || ''
          });
        } else {
          // Create a new user document if it doesn't exist
          const newUserData = {
            fullName: auth.currentUser.displayName || '',
            email: auth.currentUser.email,
            profileImage: auth.currentUser.photoURL || DEFAULT_PROFILE_IMAGE,
            memberSince: new Date(),
            subscriptionPlan: 'Free',
            streak: 0,
          };
          
          // Use setDoc instead of updateDoc for new documents
          await setDoc(userDocRef, newUserData);
          
          setUserData({
            name: newUserData.fullName || 'User',
            email: newUserData.email,
            image: newUserData.profileImage,
            memberSince: 'New Member',
            plan: 'Free',
            streak: 0,
            nextSession: 'No upcoming sessions'
          });
          
          setProfileFormData({
            fullName: newUserData.fullName || '',
            phoneNumber: '',
            bio: ''
          });
        }
        
        // Fetch unread notifications
        fetchNotifications();
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        setErrorMessage(`Error loading profile: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, [auth.currentUser, db]);
  
  // Fetch user notifications
  const fetchNotifications = async () => {
    if (!auth.currentUser) return;
    
    try {
      const notificationsRef = collection(db, "notifications");
      const q = query(
        notificationsRef, 
        where("userId", "==", auth.currentUser.uid),
        where("read", "==", false)
      );
      
      const querySnapshot = await getDocs(q);
      const notificationsData = [];
      
      querySnapshot.forEach((doc) => {
        notificationsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setNotifications(notificationsData);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.error("Error signing out:", error);
      setErrorMessage(`Error signing out: ${error.message}`);
    }
  };
  
  const handleMenuItemClick = (menuItem) => {
    if (menuItem === 'My Profile' || menuItem === 'Settings') {
      setActiveSection(menuItem.toLowerCase().replace(' ', '-'));
    } else if (menuItem === 'Notifications') {
      markNotificationsAsRead();
    } else {
      onClose(); // Close the popup after clicking a menu item
    }
  };
  
  const markNotificationsAsRead = async () => {
    if (notifications.length === 0) return;
    
    try {
      const batch = db.batch();
      
      notifications.forEach((notification) => {
        const notificationRef = doc(db, "notifications", notification.id);
        batch.update(notificationRef, { read: true });
      });
      
      await batch.commit();
      setNotifications([]);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileUpload(e.target.files[0]);
    }
  };
  
  const handleProfileUpdate = async () => {
    setErrorMessage(''); // Clear any previous error messages
    
    if (!auth.currentUser) {
      setErrorMessage('No authenticated user found. Please sign in again.');
      return;
    }
    
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      
      // Get the current document to merge with new data
      const userDocSnap = await getDoc(userDocRef);
      const currentData = userDocSnap.exists() ? userDocSnap.data() : {};
      
      // Create update data object, preserving existing fields
      const updateData = {
        ...currentData,
        fullName: profileFormData.fullName,
        phoneNumber: profileFormData.phoneNumber,
        bio: profileFormData.bio,
        lastUpdated: new Date()
      };
      
      // Handle profile image separately
      if (fileUpload) {
        setUploadingImage(true);
        try {
          const storageRef = ref(storage, `profile-images/${auth.currentUser.uid}`);
          await uploadBytes(storageRef, fileUpload);
          const profileImageUrl = await getDownloadURL(storageRef);
          
          if (profileImageUrl) {
            updateData.profileImage = profileImageUrl;
          }
        } catch (uploadError) {
          console.error("Error uploading image:", uploadError);
          // Continue with the update even if image upload fails
        } finally {
          setUploadingImage(false);
        }
      }
      
      console.log("Updating with data:", updateData); // Debug log
      
      // Use setDoc with merge option instead of updateDoc
      await setDoc(userDocRef, updateData, { merge: true });
      
      // Update local state
      setUserData(prev => ({
        ...prev,
        name: profileFormData.fullName,
        image: updateData.profileImage || prev.image,
        phoneNumber: profileFormData.phoneNumber,
        bio: profileFormData.bio
      }));
      
      // Show success message
      alert("Profile updated successfully!");
      
      // Return to main section
      setActiveSection('main');
      
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage(`Update failed: ${error.message}`);
      alert(`Failed to update profile: ${error.message}`);
    }
  };
  
  // Render profile image or default icon
  const renderProfileImage = () => {
    const imageUrl = userData?.image;
    
    if (imageUrl && imageUrl !== DEFAULT_PROFILE_IMAGE) {
      return <img src={imageUrl} alt={userData?.name} className="profile-image" />;
    } else {
      return <UserCircle size={64} className="default-profile-icon" />;
    }
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="profile-popup-overlay">
        <div className="profile-popup">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (errorMessage && !userData) {
    return (
      <div className="profile-popup-overlay">
        <div className="profile-popup">
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
          <div className="error-message">
            <p>{errorMessage}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
  
  const renderMainSection = () => (
    <>
      {errorMessage && <div className="error-banner">{errorMessage}</div>}
      <div className="profile-header">
        <div className="profile-image-container">
          {renderProfileImage()}
          {notifications.length > 0 && (
            <div className="notification-badge">{notifications.length}</div>
          )}
        </div>
        <div className="profile-info">
          <h3>{userData?.name}</h3>
          <p className="email">{userData?.email}</p>
          <p className="member-info">Member since {userData?.memberSince} • {userData?.plan}</p>
        </div>
      </div>
      
      <div className="streak-panel">
        <div className="streak-count">
          <span className="number">{userData?.streak}</span>
          <span className="label">Day Streak</span>
        </div>
        <div className="next-session">
          <span className="label">Next Session</span>
          <span className="session-time">{userData?.nextSession}</span>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="profile-menu">
        <div className="menu-item" onClick={() => handleMenuItemClick('My Profile')}>
          <User size={18} />
          <span>My Profile</span>
          <ChevronRight size={16} className="chevron" />
        </div>
        <div className="menu-item" onClick={() => handleMenuItemClick('My Community')}>
          <Users size={18} />
          <span>My Community</span>
          <ChevronRight size={16} className="chevron" />
        </div>
        <div className="menu-item" onClick={() => handleMenuItemClick('My Wellness Journey')}>
          <ActivitySquare size={18} />
          <span>My Wellness Journey</span>
          <ChevronRight size={16} className="chevron" />
        </div>
        <div className="menu-item" onClick={() => handleMenuItemClick('My Sessions')}>
          <Calendar size={18} />
          <span>My Sessions</span>
          <ChevronRight size={16} className="chevron" />
        </div>
        <div className="menu-item" onClick={() => handleMenuItemClick('My Reports')}>
          <FileText size={18} />
          <span>My Reports</span>
          <ChevronRight size={16} className="chevron" />
        </div>
        <div className="menu-item" onClick={() => handleMenuItemClick('Notifications')}>
          <Bell size={18} />
          <span>Notifications</span>
          {notifications.length > 0 && (
            <div className="menu-notification-badge">{notifications.length}</div>
          )}
        </div>
        <div className="menu-item" onClick={() => handleMenuItemClick('Settings')}>
          <Settings size={18} />
          <span>Settings</span>
          <ChevronRight size={16} className="chevron" />
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="preference-toggles">
        <div className="toggle-item" onClick={onThemeToggle}>
          <Moon size={18} />
          <span>Dark Mode</span>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="theme-toggle" 
              className="toggle-input" 
              checked={isDarkMode}
              onChange={onThemeToggle}
            />
            <label htmlFor="theme-toggle" className="toggle-label"></label>
          </div>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="footer-menu">
        <div className="menu-item" onClick={() => handleMenuItemClick('Privacy Policy')}>
          <Shield size={18} />
          <span>Privacy Policy</span>
        </div>
        <div className="menu-item logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
  
  const renderProfileSection = () => (
    <>
      {errorMessage && <div className="error-banner">{errorMessage}</div>}
      <div className="section-header">
        <button className="back-button" onClick={() => setActiveSection('main')}>
          <ChevronRight size={18} className="back-icon" />
        </button>
        <h3>My Profile</h3>
      </div>
      
      <div className="profile-edit-form">
        <div className="profile-image-editor">
          {userData?.image && userData.image !== DEFAULT_PROFILE_IMAGE ? (
            <img src={userData.image} alt={userData?.name} className="profile-image large" />
          ) : (
            <UserCircle size={120} className="default-profile-icon large" />
          )}
          <input 
            type="file" 
            id="profile-image-upload" 
            accept="image/*" 
            className="file-input"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="profile-image-upload" className="edit-image-button">
            {uploadingImage ? 'Uploading...' : 'Change Photo'}
          </label>
        </div>
        
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={profileFormData.fullName} 
            onChange={handleInputChange}
            className="form-input" 
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={userData?.email} 
            className="form-input"
            disabled
          />
          <p className="form-helper">Email cannot be changed</p>
        </div>
        
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phoneNumber"
            value={profileFormData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Add phone number" 
            className="form-input" 
          />
        </div>
        
        <div className="form-group">
          <label>Bio</label>
          <textarea 
            name="bio"
            value={profileFormData.bio}
            onChange={handleInputChange}
            placeholder="Tell us about yourself" 
            className="form-textarea"
            rows={4}
          ></textarea>
        </div>
        
        <button className="save-button" onClick={handleProfileUpdate}>
          {uploadingImage ? 'Uploading...' : 'Save Changes'}
        </button>
      </div>
    </>
  );
  
  const renderSettingsSection = () => (
    <>
      {errorMessage && <div className="error-banner">{errorMessage}</div>}
      <div className="section-header">
        <button className="back-button" onClick={() => setActiveSection('main')}>
          <ChevronRight size={18} className="back-icon" />
        </button>
        <h3>Settings</h3>
      </div>
      
      <div className="settings-list">
        <h4>Account Settings</h4>
        <div className="settings-group">
          <div className="settings-item">
            <span>Subscription Plan</span>
            <span className="settings-value">{userData?.plan}</span>
            <ChevronRight size={16} className="chevron" />
          </div>
          <div className="settings-item">
            <span>Change Password</span>
            <ChevronRight size={16} className="chevron" />
          </div>
          <div className="settings-item">
            <span>Billing Information</span>
            <ChevronRight size={16} className="chevron" />
            </div>
        </div>
        
        <h4>Notifications</h4>
        <div className="settings-group">
          <div className="toggle-item">
            <span>Push Notifications</span>
            <div className="toggle-switch">
              <input type="checkbox" id="push-toggle" className="toggle-input" defaultChecked />
              <label htmlFor="push-toggle" className="toggle-label"></label>
            </div>
          </div>
          <div className="toggle-item">
            <span>Email Notifications</span>
            <div className="toggle-switch">
              <input type="checkbox" id="email-toggle" className="toggle-input" defaultChecked />
              <label htmlFor="email-toggle" className="toggle-label"></label>
            </div>
          </div>
          <div className="toggle-item">
            <span>Session Reminders</span>
            <div className="toggle-switch">
              <input type="checkbox" id="reminder-toggle" className="toggle-input" defaultChecked />
              <label htmlFor="reminder-toggle" className="toggle-label"></label>
            </div>
          </div>
        </div>
        
        <h4>Privacy</h4>
        <div className="settings-group">
          <div className="toggle-item">
            <span>Show Online Status</span>
            <div className="toggle-switch">
              <input type="checkbox" id="online-toggle" className="toggle-input" />
              <label htmlFor="online-toggle" className="toggle-label"></label>
            </div>
          </div>
          <div className="toggle-item">
            <span>Share Activity with Community</span>
            <div className="toggle-switch">
              <input type="checkbox" id="activity-toggle" className="toggle-input" />
              <label htmlFor="activity-toggle" className="toggle-label"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="profile-popup-overlay" onClick={onClose}>
      <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>
        
        {activeSection === 'main' && renderMainSection()}
        {activeSection === 'my-profile' && renderProfileSection()}
        {activeSection === 'settings' && renderSettingsSection()}
      </div>
    </div>
  );
}

export default ProfilePopup;
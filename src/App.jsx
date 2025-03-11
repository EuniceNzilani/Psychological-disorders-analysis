import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";

import './components/theme.css';
import ProfilePopup from './components/ProfilePopup';

// Import your existing page components
import LandingPage from "./pages/Main/LandingPage";
import AuthPage from "./pages/Main/AuthPage";
import Accessibility from "./components/Accessibility";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/Main/About";
import Screening from "./pages/Main/Screening";
import Resources from "./pages/Main/Resources";
import Community from "./pages/Main/Community";
import Contact from "./pages/Main/Contact";

// Import mental health-related pages
import OCDPage from "./pages/Disorders/OCDPage";
import ADHDPage from "./pages/Disorders/ADHDPage";
import DepressionPage from "./pages/Disorders/DepressionPage";
import AnxietyPage from "./pages/Disorders/AnxietyPage";
import BipolarPage from "./pages/Disorders/BipolarPage";
import PTSDPage from "./pages/Disorders/PTSDPage";

// Import all test components
import OCDScreening from "./pages/Tests/OCDScreening";
import ADHDScreening from "./pages/Tests/ADHDScreening";
import AnxietyScreening from "./pages/Tests/AnxietyScreening";
import DepressionScreening from "./pages/Tests/DepressionScreening";
import BipolarScreening from "./pages/Tests/BipolarScreening";
import PTSDScreening from "./pages/Tests/PTSDScreening";

// Main App Component wrapped with ThemeProvider
function App() {
  const [user, setUser] = useState(null);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider>
      <AppContent 
        user={user} 
        showProfilePopup={showProfilePopup}
        setShowProfilePopup={setShowProfilePopup}
      />
    </ThemeProvider>
  );
}

// AppContent component that uses the ThemeContext
function AppContent({ user, showProfilePopup, setShowProfilePopup }) {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <div className="content">
          {/* Profile Button - Removed as per request */}
          
          <Routes>
            {/* Unprotected authentication routes */}
            <Route path="/login" element={<AuthPage initialMode="login" />} />
            <Route path="/register" element={<AuthPage initialMode="register" />} />

            {/* Protected Routes - make sure these components don't include Header */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <LandingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accessibility"
              element={
                <ProtectedRoute>
                  <Accessibility />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/screening"
              element={
                <ProtectedRoute>
                  <Screening />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute>
                  <Resources />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />

            {/* Mental Health Pages */}
            <Route
              path="/ocd"
              element={
                <ProtectedRoute>
                  <OCDPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adhd"
              element={
                <ProtectedRoute>
                  <ADHDPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/depression"
              element={
                <ProtectedRoute>
                  <DepressionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/anxiety"
              element={
                <ProtectedRoute>
                  <AnxietyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bipolar"
              element={
                <ProtectedRoute>
                  <BipolarPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ptsd"
              element={
                <ProtectedRoute>
                  <PTSDPage />
                </ProtectedRoute>
              }
            />

            {/* Test Routes */}
            <Route
              path="/ocd-screening"
              element={
                <ProtectedRoute>
                  <OCDScreening />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adhd-screening"
              element={
                <ProtectedRoute>
                  <ADHDScreening />
                </ProtectedRoute>
              }
            />
            <Route
              path="/anxiety-screening"
              element={
                <ProtectedRoute>
                  <AnxietyScreening />
                </ProtectedRoute>
              }
            />
            <Route
              path="/depression-screening"
              element={
                <ProtectedRoute>
                  <DepressionScreening />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bipolar-screening"
              element={
                <ProtectedRoute>
                  <BipolarScreening />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ptsd-screening"
              element={
                <ProtectedRoute>
                  <PTSDScreening />
                </ProtectedRoute>
              }
            />

            {/* Catch-all route to redirect unknown paths to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
          
          {/* Profile Popup */}
          {showProfilePopup && (
            <ProfilePopupWithTheme 
              onClose={() => setShowProfilePopup(false)}
            />
          )}
        </div>
      </Router>
    </div>
  );
}

// Wrapper for ProfilePopup with theme context
function ProfilePopupWithTheme({ onClose }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
  return (
    <ProfilePopup 
      onClose={onClose} 
      onThemeToggle={toggleDarkMode} 
      isDarkMode={darkMode}
    />
  );
}

export default App;
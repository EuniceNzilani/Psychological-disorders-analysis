import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  getAuth // Import auth directly from firebase/auth
} from "firebase/auth";
import './AuthPage.css';

const AuthPage = ({ initialMode = "login" }) => {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false,
    securityQuestion: '',
    securityAnswer: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const backgroundRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set login/register state based on prop
    setIsLogin(initialMode === "login");
    
    if (emailInputRef.current) emailInputRef.current.focus();
    
    const handleMouseMove = (e) => {
      if (backgroundRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        backgroundRef.current.style.setProperty('--mouse-x', x);
        backgroundRef.current.style.setProperty('--mouse-y', y);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initialMode]);
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
      if (!formData.securityQuestion) {
        newErrors.securityQuestion = 'Please select a security question';
      }
      if (!formData.securityAnswer) {
        newErrors.securityAnswer = 'Security answer is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsLoading(true);
  
    try {
      if (isLogin) {
        console.log("Attempting sign-in...");
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("Sign-in successful");
  
        // Navigate to the page they were trying to access or to home if there's no saved location
        const destination = location.state?.from?.pathname || '/home';
        navigate(destination);
      } else {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        setRegistrationSuccess(true);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Navigate to the page they were trying to access or to home
      const destination = location.state?.from?.pathname || '/home';
      navigate(destination);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };
  const switchMode = () => {
    setRegistrationSuccess(false);
    if (isLogin) {
      navigate('/register');
    } else {
      navigate('/');
    }
  };
  
  const passwordStrength = () => {
    const password = formData.password;
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };
  
  return (
    <div className="auth-container" ref={backgroundRef}>
      <div className="auth-background">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
        <div className="network-grid"></div>
      </div>
      
      <div className="auth-card fade-in">
        <div className="auth-header">
          <div className="logo">
            <span className="logo-icon"></span>
            <h1>MindfulPath</h1>
          </div>
          <h2>{isLogin ? 'Welcome Back' : 'Create Your Account'}</h2>
          <p className="subtitle">
            {isLogin 
              ? 'Your journey to better mental health continues here' 
              : 'Join our community for personalized mental health support'}
          </p>
        </div>
        
        {errors.general && (
          <div className="auth-message error">
            {errors.general}
          </div>
        )}
        
        {!isLogin && registrationSuccess ? (
          <div className="registration-success" style={{ textAlign: 'center', padding: '20px' }}>
            <p style={{ marginBottom: '20px' }}>Registration Successful!</p>
            <button 
              type="button" 
              className="submit-button" 
              onClick={() => navigate('/')}
            >
              Back to Login
            </button>
          </div>
        ) : (
          <div className="auth-form-container" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={emailInputRef}
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  <span className="input-icon email-icon"></span>
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    ref={passwordInputRef}
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="••••••••"
                  />
                  <span className="input-icon password-icon"></span>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
                
                {!isLogin && formData.password && (
                  <div className="password-strength">
                    <div className="strength-meter">
                      {[...Array(5)].map((_, index) => (
                        <div 
                          key={index} 
                          className={`strength-segment ${index < passwordStrength() ? 'active' : ''}`}
                          data-strength={index + 1}
                        ></div>
                      ))}
                    </div>
                    <span className="strength-text">
                      {passwordStrength() === 0 && 'Very Weak'}
                      {passwordStrength() === 1 && 'Weak'}
                      {passwordStrength() === 2 && 'Fair'}
                      {passwordStrength() === 3 && 'Good'}
                      {passwordStrength() === 4 && 'Strong'}
                      {passwordStrength() === 5 && 'Very Strong'}
                    </span>
                  </div>
                )}
              </div>
              
              {!isLogin && (
                <>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-container">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? 'error' : ''}
                        placeholder="••••••••"
                      />
                      <span className="input-icon password-confirm-icon"></span>
                    </div>
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="firstName">First Name</label>
                      <div className="input-container">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={errors.firstName ? 'error' : ''}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>
                    
                    <div className="form-group half">
                      <label htmlFor="lastName">Last Name</label>
                      <div className="input-container">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={errors.lastName ? 'error' : ''}
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="securityQuestion">Security Question</label>
                    <div className="input-container">
                      <select
                        id="securityQuestion"
                        name="securityQuestion"
                        value={formData.securityQuestion}
                        onChange={handleChange}
                        className={errors.securityQuestion ? 'error' : ''}
                      >
                        <option value="">Select a security question</option>
                        <option value="firstPet">What was the name of your first pet?</option>
                        <option value="mothersMaiden">What is your mother's maiden name?</option>
                        <option value="birthCity">In what city were you born?</option>
                        <option value="elementarySchool">What elementary school did you attend?</option>
                        <option value="firstCar">What was the make of your first car?</option>
                      </select>
                      <span className="input-icon security-icon"></span>
                    </div>
                    {errors.securityQuestion && <span className="error-message">{errors.securityQuestion}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="securityAnswer">Security Answer</label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="securityAnswer"
                        name="securityAnswer"
                        value={formData.securityAnswer}
                        onChange={handleChange}
                        className={errors.securityAnswer ? 'error' : ''}
                        placeholder="Your answer"
                      />
                    </div>
                    {errors.securityAnswer && <span className="error-message">{errors.securityAnswer}</span>}
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      <span className="checkbox-label">
                        I agree to the <a href="#terms" className="text-link">Terms of Service</a> and <a href="#privacy" className="text-link">Privacy Policy</a>
                      </span>
                    </label>
                    {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
                  </div>
                </>
              )}
              
              {isLogin && (
                <div className="forgot-password">
                  <a href="#reset" className="text-link">Forgot your password?</a>
                </div>
              )}
              
              <button 
                type="submit" 
                className={`submit-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>
            
            <button 
              type="button" 
              className="submit-button google-button" 
              onClick={handleGoogleAuth}
              disabled={isLoading}
              style={{ 
                marginTop: '15px', 
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))' 
              }}
            >
              Continue with Google
            </button>
          </div>
        )}
        
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button type="button" onClick={switchMode} className="mode-switch">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
        
        <div className="neural-decoration top-right"></div>
        <div className="neural-decoration bottom-left"></div>
      </div>
    </div>
  );
};

export default AuthPage;
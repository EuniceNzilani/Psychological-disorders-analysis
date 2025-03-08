import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function LandingPage() {
  return (
    <div className="App">
            {/* Use the Header component */}
            <Header />
      
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: "url('/assets/images/calming2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
         <div className="hero-content" >
          <h1>Welcome to MindEase</h1>
          <p>Your safe space for understanding and managing mental health.</p>
          <div className="cta-buttons">
            <Link to="/screening"><button className="primary-cta">Take a Screening Test</button></Link>
            <Link to="/community"><button className="secondary-cta">Join the Community</button></Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>How We Can Help</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="card-icon">🧠</div>
            <h3>Screening Tools</h3>
            <p>Accessible, scientifically-validated assessments.</p>
          </div>
          <div className="card">
            <div className="card-icon">🤝</div>
            <h3>Personalized Resources</h3>
            <p>Connect with specialists tailored to your needs.</p>
          </div>
          <div className="card">
            <div className="card-icon">💬</div>
            <h3>Community Support</h3>
            <p>Join moderated peer support groups.</p>
          </div>
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your mental health journey.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About MindEase</h2>
          <p>We are dedicated to providing comprehensive support for mental health conditions. Our platform combines cutting-edge technology with compassionate care to help you thrive.</p>
          <Link to="/about" className="about-link">Learn More →</Link>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/400" alt="About illustration" />
        </div>
      </section>

       {/* Disorders Section */}
       <section className="disorders">
        <h2>Explore Mental Health Conditions</h2>
        <div className="disorder-grid">
          {/* OCD */}
          <Link to="/ocd" className="disorder-card">
            <h3>OCD</h3>
            <p>Obsessive-Compulsive Disorder</p>
          </Link>

          {/* ADHD */}
          <Link to="/adhd" className="disorder-card">
            <h3>ADHD</h3>
            <p>Attention-Deficit/Hyperactivity Disorder</p>
          </Link>

          {/* Depression */}
          <Link to="/depression" className="disorder-card">
            <h3>Depression</h3>
            <p>Major Depressive Disorder</p>
          </Link>

          {/* Anxiety */}
          <Link to="/anxiety" className="disorder-card">
            <h3>Anxiety</h3>
            <p>Generalized Anxiety Disorder</p>
          </Link>

          {/* Bipolar Disorder */}
          <Link to="/bipolar" className="disorder-card">
            <h3>Bipolar Disorder</h3>
            <p>Bipolar I and II Disorders</p>
          </Link>

          {/* PTSD */}
          <Link to="/ptsd" className="disorder-card">
            <h3>PTSD</h3>
            <p>Post-Traumatic Stress Disorder</p>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"MindEase helped me understand my condition and find the right support. I feel less alone now."</p>
            <p>- Sarah, 28</p>
          </div>
          <div className="testimonial">
            <p>"The community here is amazing. I finally feel heard and supported."</p>
            <p>- John, 34</p>
          </div>
        </div>
      </section>
            {/* Use the Footer component */}
            <Footer />
    </div>
  );
}

export default LandingPage;
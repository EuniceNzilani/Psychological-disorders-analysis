import React from 'react';
import './About.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function About() {
  return (
    <div className="about">
      <Header />
      
      {/* About MindEase Section */}
      <section className="section">
        <h2>About MindEase</h2>
        <div className="content-container">
          <p className="main-description">
            MindEase is a digital platform designed to provide comprehensive support for individuals dealing with mental health conditions. Our mission is to make mental health care accessible, personalized, and stigma-free.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section">
        <h2>Our Services</h2>
        <div className="content-container">
          <div className="card">
            <h3>Personalized Assessments</h3>
            <p>Take our evidence-based screening tools to receive insights tailored to your unique mental health profile.</p>
          </div>
          
          <div className="card">
            <h3>Resource Library</h3>
            <p>Access our extensive collection of articles, videos, and exercises created by mental health professionals.</p>
          </div>
          
          <div className="card">
            <h3>Guided Programs</h3>
            <p>Follow structured, self-paced programs designed to help you develop coping skills for anxiety, depression, and stress.</p>
          </div>
          
          <div className="card">
            <h3>Progress Tracking</h3>
            <p>Monitor your mental wellbeing over time with our intuitive tracking tools that help identify patterns and improvements.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section">
        <h2>Our Team</h2>
        <div className="content-container">
          <div className="card team-card">
            <img src="/assets/images/person1.jpeg" alt="Dr. Jane Mwangi" />
            <h3>Dr. Jane Mwangi</h3>
            <p>Clinical Psychologist & Founder</p>
          </div>
          
          <div className="card team-card">
            <img src="/assets/images/person2.jpeg" alt="Aaron Omondi" />
            <h3>Aaron Omondi</h3>
            <p>Chief Technology Officer</p>
          </div>
          
          <div className="card team-card">
            <img src="/assets/images/person3.jpeg" alt="Lilian Mueni" />
            <h3>Lilian Mueni</h3>
            <p>Head of Research</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section">
        <h2>Our Approach</h2>
        <div className="content-container">
          <div className="approach-content">
            <p>
              At MindEase, we combine cutting-edge technology with evidence-based psychological practices. Our platform uses advanced algorithms to provide recommendations specifically tailored to your needs, preferences, and progress.
            </p>
            <p>
              All content on MindEase is developed and reviewed by licensed mental health professionals to ensure accuracy and effectiveness. We regularly update our resources to reflect the latest research in psychology and mental health care.
            </p>
            
            <a href="/screening" className="cta-button">Get Started Today</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;

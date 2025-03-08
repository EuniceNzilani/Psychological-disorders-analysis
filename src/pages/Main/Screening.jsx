import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Screening.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Screening() {
  const navigate = useNavigate();

  // Function to handle button clicks
  const handleStartTest = (testName) => {
    switch (testName) {
      case "OCD Screening":
        navigate('/ocd-screening');
        break;
      case "ADHD Screening":
        navigate('/adhd-screening');
        break;
      case "Anxiety Screening":
        navigate('/anxiety-screening');
        break;
      case "Depression Screening":
        navigate('/depression-screening');
        break;
      case "Bipolar Disorder Screening":
        navigate('/bipolar-screening');
        break;
      case "PTSD Screening":
        navigate('/ptsd-screening');
        break;
      default:
        alert(`Starting ${testName}...`);
    }
  };

  return (
    <div className="screening">
      <Header />
      <section className="screening-intro">
        <h1>Screening Tools</h1>
        <p>
          Take a scientifically-validated assessment to better understand your mental health. Our tools are designed to help you identify potential conditions and connect you with the right resources. Early detection and understanding of mental health conditions can lead to more effective treatment and improved quality of life. Whether you're experiencing symptoms or simply want to learn more about your mental well-being, these assessments are a great first step toward gaining clarity and finding support.
        </p>
      </section>
      <section className="screening-tests">
        <h2>Available Tests</h2>
        <div className="test-cards">
          <div className="test-card">
            <h3>OCD Screening</h3>
            <p>A quick assessment for Obsessive-Compulsive Disorder, designed to help you understand if you may be experiencing symptoms of OCD.</p>
            <button onClick={() => handleStartTest("OCD Screening")}>Start Test</button>
          </div>
          <div className="test-card">
            <h3>ADHD Screening</h3>
            <p>Evaluate symptoms of Attention-Deficit/Hyperactivity Disorder and determine if you may benefit from further evaluation.</p>
            <button onClick={() => handleStartTest("ADHD Screening")}>Start Test</button>
          </div>
          <div className="test-card">
            <h3>Anxiety Screening</h3>
            <p>Assess symptoms of Generalized Anxiety Disorder and gain insight into your anxiety levels.</p>
            <button onClick={() => handleStartTest("Anxiety Screening")}>Start Test</button>
          </div>
          <div className="test-card">
            <h3>Depression Screening</h3>
            <p>Identify symptoms of depression and determine if you may need professional support or treatment.</p>
            <button onClick={() => handleStartTest("Depression Screening")}>Start Test</button>
          </div>
          <div className="test-card">
            <h3>Bipolar Disorder Screening</h3>
            <p>Evaluate symptoms of Bipolar Disorder, including mood swings, energy levels, and behavior changes.</p>
            <button onClick={() => handleStartTest("Bipolar Disorder Screening")}>Start Test</button>
          </div>
          <div className="test-card">
            <h3>PTSD Screening</h3>
            <p>Assess symptoms of Post-Traumatic Stress Disorder and determine if you may need further evaluation or support.</p>
            <button onClick={() => handleStartTest("PTSD Screening")}>Start Test</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Screening;
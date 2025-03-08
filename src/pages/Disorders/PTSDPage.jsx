import React from 'react';
import { Link } from 'react-router-dom';
import './PTSDPage.css'; // Import the CSS file

const PTSDPage = () => {
  return (
    <div className="ptsd-page">
      {/* Header */}
      <header className="ptsd-header">
        <div className="logo">PTSD</div> {/* Logo at the top left */}
        <nav className="ptsd-navbar">
          <ul className="ptsd-nav-links">
            <li>
              <Link to="/">
                <span role="img" aria-label="Home">🏠</span> Home
              </Link>
            </li>
            <li>
              <a href="#overview">
                <span role="img" aria-label="Overview">🧠</span> Overview
              </a>
            </li>
            <li>
              <a href="#signs-and-symptoms">
                <span role="img" aria-label="Signs and Symptoms">📋</span> Signs and Symptoms
              </a>
            </li>
            <li>
              <a href="#causes">
                <span role="img" aria-label="Causes">🔍</span> Causes
              </a>
            </li>
            <li>
              <a href="#diagnosis-and-tests">
                <span role="img" aria-label="Diagnosis and Tests">🩺</span> Diagnosis and Tests
              </a>
            </li>
            <li>
              <a href="#management-and-treatment">
                <span role="img" aria-label="Management and Treatment">💊</span> Management and Treatment
              </a>
            </li>
            <li>
              <a href="#prevention">
                <span role="img" aria-label="Prevention">🚫</span> Prevention
              </a>
            </li>
          </ul>
        </nav>
        <button className="login-button">Login/Signup</button> {/* Login button on the far right */}
      </header>

      {/* Page Content */}
      <div className="ptsd-content">
        <h1>Post-Traumatic Stress Disorder (PTSD)</h1>
        <div className="ptsd-image-container">
          <img src="/assets/images/ptsd1.jpeg" alt="PTSD Illustration" className="ptsd-image" />
        </div>

        {/* Overview Section */}
        <section id="overview" className="section">
          <h2>Overview</h2>
          <p>
            Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. Such events may include natural disasters, serious accidents, terrorist acts, war/combat, rape, or other violent personal assaults.
          </p>
          <p>
            PTSD can affect anyone, regardless of age, gender, or background. Symptoms can be severe and long-lasting, interfering with daily life and relationships. Common symptoms include:
          </p>
          <ul>
            <li>Flashbacks or reliving the traumatic event.</li>
            <li>Nightmares or severe anxiety.</li>
            <li>Uncontrollable thoughts about the event.</li>
            <li>Avoidance of places, activities, or people that remind you of the trauma.</li>
            <li>Negative changes in mood and thinking.</li>
            <li>Hyperarousal (feeling on edge, being easily startled).</li>
          </ul>
          <p>
            PTSD is treatable, and many people recover with proper treatment and support.
          </p>
        </section>

        {/* Signs and Symptoms Section */}
        <section id="signs-and-symptoms" className="section">
          <h2>Signs and Symptoms</h2>
          <p>
            Symptoms of PTSD are generally grouped into four types: intrusive memories, avoidance, negative changes in thinking and mood, and changes in physical and emotional reactions. Common signs and symptoms include:
          </p>
          <ul>
            <li><strong>Intrusive Memories:</strong> Flashbacks, nightmares, or distressing memories of the event.</li>
            <li><strong>Avoidance:</strong> Avoiding places, activities, or people that remind you of the trauma.</li>
            <li><strong>Negative Changes in Thinking and Mood:</strong> Feelings of hopelessness, memory problems, or detachment from loved ones.</li>
            <li><strong>Changes in Physical and Emotional Reactions:</strong> Being easily startled, feeling tense, or having angry outbursts.</li>
          </ul>
          <p>
            Symptoms must persist for more than a month and significantly impair daily functioning for a diagnosis of PTSD.
          </p>
        </section>

        {/* Causes Section */}
        <section id="causes" className="section">
          <h2>Causes</h2>
          <p>
            PTSD is caused by experiencing or witnessing a traumatic event. However, not everyone who experiences trauma develops PTSD. Risk factors include:
          </p>
          <ul>
            <li><strong>Intensity of the Trauma:</strong> The more severe and prolonged the trauma, the higher the risk.</li>
            <li><strong>Personal History:</strong> A history of mental health issues or previous trauma.</li>
            <li><strong>Lack of Support:</strong> Limited social support after the event.</li>
            <li><strong>Biological Factors:</strong> Genetics or brain chemistry may play a role.</li>
          </ul>
          <p>
            The following are <strong>not</strong> causes of PTSD:
          </p>
          <ul>
            <li>Personal weakness or character flaws.</li>
            <li>Simply feeling "stressed" or "anxious."</li>
            <li>A lack of willpower.</li>
          </ul>
        </section>

        {/* Diagnosis and Tests Section */}
        <section id="diagnosis-and-tests" className="section">
          <h2>Diagnosis and Tests</h2>
          <p>
            PTSD is diagnosed based on a thorough evaluation of symptoms, medical history, and behavior. There is no single test for PTSD, but healthcare providers may use:
          </p>
          <ul>
            <li>Questionnaires and interviews.</li>
            <li>Psychological evaluations.</li>
            <li>Guidelines from the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders).</li>
          </ul>
          <p>
            Symptoms must:
          </p>
          <ul>
            <li>Persist for more than a month.</li>
            <li>Significantly impair daily functioning.</li>
            <li>Not be attributable to substance use or another medical condition.</li>
          </ul>
        </section>

        {/* Management and Treatment Section */}
        <section id="management-and-treatment" className="section">
          <h2>Management and Treatment</h2>
          <p>
            Treatment for PTSD typically involves a combination of:
          </p>
          <ul>
            <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT), eye movement desensitization and reprocessing (EMDR), or exposure therapy.</li>
            <li><strong>Medication:</strong> Antidepressants, anti-anxiety medications, or sleep aids.</li>
            <li><strong>Lifestyle Changes:</strong> Regular exercise, stress management, and building a strong support network.</li>
            <li><strong>Support Groups:</strong> Connecting with others who have experienced similar traumas.</li>
          </ul>
          <p>
            The goal of treatment is to reduce symptoms, improve quality of life, and help individuals regain a sense of control.
          </p>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="section">
          <h2>Prevention</h2>
          <p>
            While PTSD cannot always be prevented, certain strategies may reduce the risk or severity of symptoms:
          </p>
          <ul>
            <li>Seeking immediate support after a traumatic event.</li>
            <li>Building a strong support network of family and friends.</li>
            <li>Practicing stress-reduction techniques like mindfulness or meditation.</li>
            <li>Seeking professional help early if symptoms arise.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PTSDPage;
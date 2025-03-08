import React from 'react';
import { Link } from 'react-router-dom';
import './BipolarPage.css'; // Import the CSS file

const BipolarPage = () => {
  return (
    <div className="bipolar-page">
      {/* Header */}
      <header className="bipolar-header">
        <div className="logo">Bipolar</div> {/* Logo at the top left */}
        <nav className="bipolar-navbar">
          <ul className="bipolar-nav-links">
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
      <div className="bipolar-content">
        <h1>Bipolar Disorder</h1>
        <div className="bipolar-image-container">
          <img src="/assets/images/bipolar1.jpeg" alt="Bipolar Disorder Illustration" className="bipolar-image" />
        </div>

        {/* Overview Section */}
        <section id="overview" className="section">
          <h2>Overview</h2>
          <p>
            Bipolar disorder, formerly known as manic-depressive illness, is a mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These mood swings can affect sleep, energy, activity, judgment, behavior, and the ability to think clearly.
          </p>
          <p>
            Bipolar disorder is a chronic condition that requires lifelong management. It is typically diagnosed in late adolescence or early adulthood, but symptoms can appear at any age. Common symptoms include:
          </p>
          <ul>
            <li>Episodes of mania or hypomania (elevated mood, increased energy).</li>
            <li>Episodes of depression (sadness, hopelessness, loss of interest).</li>
            <li>Mood swings that disrupt daily life.</li>
            <li>Difficulty maintaining relationships or performing at work or school.</li>
          </ul>
          <p>
            Bipolar disorder is treatable, and most people can manage their symptoms with medication, therapy, and lifestyle changes.
          </p>
        </section>

        {/* Signs and Symptoms Section */}
        <section id="signs-and-symptoms" className="section">
          <h2>Signs and Symptoms</h2>
          <p>
            Symptoms of bipolar disorder vary depending on the type of episode (manic, hypomanic, or depressive). Common signs and symptoms include:
          </p>
          <ul>
            <li><strong>Manic Episode:</strong> Elevated mood, increased energy, reduced need for sleep, racing thoughts, impulsive behavior.</li>
            <li><strong>Hypomanic Episode:</strong> Similar to manic episodes but less severe and not as disruptive.</li>
            <li><strong>Depressive Episode:</strong> Persistent sadness, fatigue, loss of interest, feelings of worthlessness, difficulty concentrating.</li>
          </ul>
          <p>
            Symptoms must persist for a specific duration and significantly impair daily functioning for a diagnosis of bipolar disorder.
          </p>
        </section>

        {/* Causes Section */}
        <section id="causes" className="section">
          <h2>Causes</h2>
          <p>
            The exact cause of bipolar disorder is not fully understood, but it is believed to result from a combination of genetic, biological, and environmental factors. Risk factors include:
          </p>
          <ul>
            <li><strong>Genetics:</strong> A family history of bipolar disorder or other mood disorders.</li>
            <li><strong>Brain Structure and Function:</strong> Differences in brain chemistry and structure.</li>
            <li><strong>Environmental Factors:</strong> Stress, trauma, or significant life changes.</li>
          </ul>
          <p>
            The following are <strong>not</strong> causes of bipolar disorder:
          </p>
          <ul>
            <li>Personal weakness or character flaws.</li>
            <li>Simply being "moody" or "emotional."</li>
            <li>A lack of willpower.</li>
          </ul>
        </section>

        {/* Diagnosis and Tests Section */}
        <section id="diagnosis-and-tests" className="section">
          <h2>Diagnosis and Tests</h2>
          <p>
            Bipolar disorder is diagnosed based on a thorough evaluation of symptoms, medical history, and behavior. There is no single test for bipolar disorder, but healthcare providers may use:
          </p>
          <ul>
            <li>Questionnaires and interviews.</li>
            <li>Mood charting to track mood swings over time.</li>
            <li>Guidelines from the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders).</li>
          </ul>
          <p>
            Symptoms must:
          </p>
          <ul>
            <li>Persist for a specific duration (e.g., at least one week for mania).</li>
            <li>Significantly impair daily functioning.</li>
            <li>Not be attributable to substance use or another medical condition.</li>
          </ul>
        </section>

        {/* Management and Treatment Section */}
        <section id="management-and-treatment" className="section">
          <h2>Management and Treatment</h2>
          <p>
            Treatment for bipolar disorder typically involves a combination of:
          </p>
          <ul>
            <li><strong>Medication:</strong> Mood stabilizers, antipsychotics, or antidepressants.</li>
            <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT), family-focused therapy, or psychoeducation.</li>
            <li><strong>Lifestyle Changes:</strong> Regular sleep patterns, stress management, and avoiding triggers.</li>
            <li><strong>Support Groups:</strong> Connecting with others who have similar experiences.</li>
          </ul>
          <p>
            The goal of treatment is to stabilize mood, reduce symptoms, and improve quality of life.
          </p>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="section">
          <h2>Prevention</h2>
          <p>
            While bipolar disorder cannot always be prevented, certain strategies may reduce the risk or severity of episodes:
          </p>
          <ul>
            <li>Seeking early treatment if symptoms arise.</li>
            <li>Maintaining a stable routine and sleep schedule.</li>
            <li>Avoiding alcohol and recreational drugs.</li>
            <li>Building a strong support network.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BipolarPage;
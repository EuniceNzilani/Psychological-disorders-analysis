import React from 'react';
import { Link } from 'react-router-dom';
import './AnxietyPage.css'; // Import the CSS file

const AnxietyPage = () => {
  return (
    <div className="anxiety-page">
      {/* Header */}
      <header className="anxiety-header">
        <div className="logo">Anxiety</div> {/* Logo at the top left */}
        <nav className="anxiety-navbar">
          <ul className="anxiety-nav-links">
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
      <div className="anxiety-content">
        <h1>Anxiety Disorders</h1>
        <div className="anxiety-image-container">
          <img src="/assets/images/Anxiety1.jpeg" alt="Anxiety Illustration" className="anxiety-image" />
        </div>

        {/* Overview Section */}
        <section id="overview" className="section">
          <h2>Overview</h2>
          <p>
            Anxiety disorders are a group of mental health conditions characterized by excessive fear, worry, or nervousness. These feelings can interfere with daily activities and are often difficult to control. Anxiety disorders include generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, and specific phobias.
          </p>
          <p>
            Anxiety is a normal response to stress, but when it becomes chronic or overwhelming, it can significantly impact a person's quality of life. Common symptoms include:
          </p>
          <ul>
            <li>Excessive worry or fear.</li>
            <li>Restlessness or feeling on edge.</li>
            <li>Fatigue.</li>
            <li>Difficulty concentrating.</li>
            <li>Irritability.</li>
            <li>Muscle tension.</li>
            <li>Sleep disturbances.</li>
          </ul>
          <p>
            Anxiety disorders are highly treatable, and most people see improvement with therapy, medication, or a combination of both.
          </p>
        </section>

        {/* Signs and Symptoms Section */}
        <section id="signs-and-symptoms" className="section">
          <h2>Signs and Symptoms</h2>
          <p>
            Symptoms of anxiety disorders can vary depending on the specific type of disorder. Common signs and symptoms include:
          </p>
          <ul>
            <li><strong>Physical Symptoms:</strong> Rapid heartbeat, sweating, trembling, shortness of breath, or dizziness.</li>
            <li><strong>Emotional Symptoms:</strong> Feelings of dread, panic, or unease.</li>
            <li><strong>Cognitive Symptoms:</strong> Difficulty concentrating, racing thoughts, or constant worry.</li>
            <li><strong>Behavioral Symptoms:</strong> Avoidance of certain situations or activities.</li>
          </ul>
          <p>
            Symptoms must persist for at least six months and significantly impair daily functioning for a diagnosis of an anxiety disorder.
          </p>
        </section>

        {/* Causes Section */}
        <section id="causes" className="section">
          <h2>Causes</h2>
          <p>
            The exact cause of anxiety disorders is not fully understood, but they are believed to result from a combination of genetic, environmental, and psychological factors. Risk factors include:
          </p>
          <ul>
            <li><strong>Genetics:</strong> A family history of anxiety disorders may increase the risk.</li>
            <li><strong>Brain Chemistry:</strong> Imbalances in neurotransmitters like serotonin and dopamine.</li>
            <li><strong>Environmental Factors:</strong> Trauma, stress, or significant life changes.</li>
            <li><strong>Personality:</strong> Certain personality traits, such as shyness or perfectionism.</li>
          </ul>
          <p>
            The following are <strong>not</strong> causes of anxiety disorders:
          </p>
          <ul>
            <li>Personal weakness or character flaws.</li>
            <li>Simply feeling "nervous" or "stressed."</li>
            <li>A lack of willpower.</li>
          </ul>
        </section>

        {/* Diagnosis and Tests Section */}
        <section id="diagnosis-and-tests" className="section">
          <h2>Diagnosis and Tests</h2>
          <p>
            Anxiety disorders are diagnosed based on a thorough evaluation of symptoms, medical history, and behavior. There is no single test for anxiety, but healthcare providers may use:
          </p>
          <ul>
            <li>Questionnaires and interviews.</li>
            <li>Physical exams to rule out other conditions.</li>
            <li>Guidelines from the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders).</li>
          </ul>
          <p>
            Symptoms must:
          </p>
          <ul>
            <li>Persist for at least six months.</li>
            <li>Significantly impair daily functioning.</li>
            <li>Not be attributable to substance use or another medical condition.</li>
          </ul>
        </section>

        {/* Management and Treatment Section */}
        <section id="management-and-treatment" className="section">
          <h2>Management and Treatment</h2>
          <p>
            Treatment for anxiety disorders typically involves a combination of:
          </p>
          <ul>
            <li><strong>Medication:</strong> Antidepressants, anti-anxiety medications, or beta-blockers.</li>
            <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT), exposure therapy, or other forms of counseling.</li>
            <li><strong>Lifestyle Changes:</strong> Regular exercise, a healthy diet, and stress management techniques.</li>
            <li><strong>Support Groups:</strong> Connecting with others who have similar experiences.</li>
          </ul>
          <p>
            The goal of treatment is to reduce symptoms, improve quality of life, and prevent recurrence.
          </p>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="section">
          <h2>Prevention</h2>
          <p>
            While anxiety disorders cannot always be prevented, certain strategies may reduce the risk or severity of episodes:
          </p>
          <ul>
            <li>Maintaining a strong support network.</li>
            <li>Engaging in regular physical activity.</li>
            <li>Practicing stress-reduction techniques like mindfulness or meditation.</li>
            <li>Seeking help early if symptoms arise.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AnxietyPage;
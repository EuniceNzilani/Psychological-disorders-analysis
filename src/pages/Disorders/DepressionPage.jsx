import React from 'react';
import { Link } from 'react-router-dom';
import './DepressionPage.css'; // Import the CSS file

const DepressionPage = () => {
  return (
    <div className="depression-page">
      {/* Header */}
      <header className="depression-header">
        <div className="logo">Depression</div> {/* Logo at the top left */}
        <nav className="depression-navbar">
          <ul className="depression-nav-links">
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
      <div className="depression-content">
        <h1>Depression</h1>
        <div className="depression-image-container">
          <img src="/assets/images/Depression1.png" alt="Depression Illustration" className="depression-image" />
        </div>

        {/* Overview Section */}
        <section id="overview" className="section">
          <h2>Overview</h2>
          <p>
            Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to a variety of emotional and physical problems and can decrease a person’s ability to function at work and at home.
          </p>
          <p>
            Depression symptoms can vary from mild to severe and can include:
          </p>
          <ul>
            <li>Feeling sad or having a depressed mood.</li>
            <li>Loss of interest or pleasure in activities once enjoyed.</li>
            <li>Changes in appetite — weight loss or gain unrelated to dieting.</li>
            <li>Trouble sleeping or sleeping too much.</li>
            <li>Loss of energy or increased fatigue.</li>
            <li>Increase in purposeless physical activity (e.g., inability to sit still, pacing, handwringing) or slowed movements or speech.</li>
            <li>Feeling worthless or guilty.</li>
            <li>Difficulty thinking, concentrating, or making decisions.</li>
            <li>Thoughts of death or suicide.</li>
          </ul>
          <p>
            Depression is a treatable condition, and most people see improvement with medication, therapy, or a combination of both.
          </p>
        </section>

        {/* Signs and Symptoms Section */}
        <section id="signs-and-symptoms" className="section">
          <h2>Signs and Symptoms</h2>
          <p>
            Depression symptoms can vary depending on the severity of the condition. Common signs and symptoms include:
          </p>
          <ul>
            <li><strong>Emotional Symptoms:</strong> Persistent sadness, hopelessness, irritability, or feelings of emptiness.</li>
            <li><strong>Physical Symptoms:</strong> Fatigue, changes in appetite, sleep disturbances, and unexplained aches or pains.</li>
            <li><strong>Cognitive Symptoms:</strong> Difficulty concentrating, making decisions, or remembering details.</li>
            <li><strong>Behavioral Symptoms:</strong> Withdrawal from social activities, loss of interest in hobbies, or neglect of responsibilities.</li>
          </ul>
          <p>
            Symptoms must last at least two weeks and represent a change in your previous level of functioning for a diagnosis of depression.
          </p>
        </section>

        {/* Causes Section */}
        <section id="causes" className="section">
          <h2>Causes</h2>
          <p>
            The exact cause of depression is not fully understood, but it is believed to result from a combination of genetic, biological, environmental, and psychological factors. Risk factors include:
          </p>
          <ul>
            <li><strong>Genetics:</strong> A family history of depression may increase the risk.</li>
            <li><strong>Brain Chemistry:</strong> Imbalances in neurotransmitters like serotonin and dopamine.</li>
            <li><strong>Hormonal Changes:</strong> Changes in hormone levels due to pregnancy, menopause, or thyroid problems.</li>
            <li><strong>Environmental Factors:</strong> Trauma, loss of a loved one, or stressful life events.</li>
          </ul>
          <p>
            The following are <strong>not</strong> causes of depression:
          </p>
          <ul>
            <li>Personal weakness or character flaws.</li>
            <li>Simply feeling "down" or "blue."</li>
            <li>A lack of willpower.</li>
          </ul>
        </section>

        {/* Diagnosis and Tests Section */}
        <section id="diagnosis-and-tests" className="section">
          <h2>Diagnosis and Tests</h2>
          <p>
            Depression is diagnosed based on a thorough evaluation of symptoms, medical history, and behavior. There is no single test for depression, but healthcare providers may use:
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
            <li>Persist for at least two weeks.</li>
            <li>Significantly impair daily functioning.</li>
            <li>Not be attributable to substance use or another medical condition.</li>
          </ul>
        </section>

        {/* Management and Treatment Section */}
        <section id="management-and-treatment" className="section">
          <h2>Management and Treatment</h2>
          <p>
            Treatment for depression typically involves a combination of:
          </p>
          <ul>
            <li><strong>Medication:</strong> Antidepressants (e.g., SSRIs, SNRIs) to help balance brain chemistry.</li>
            <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), or other forms of counseling.</li>
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
            While depression cannot always be prevented, certain strategies may reduce the risk or severity of episodes:
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

export default DepressionPage;
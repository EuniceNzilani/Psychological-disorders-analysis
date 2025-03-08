import React from 'react';
import { Link } from 'react-router-dom';
import './ADHDPage.css'; // Import the CSS file

const ADHDPage = () => {
  return (
    <div className="adhd-page">
      {/* Header */}
      <header className="adhd-header">
        <div className="logo">ADHD</div> {/* Logo at the top left */}
        <nav className="adhd-navbar">
          <ul className="adhd-nav-links">
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
      <div className="adhd-content">
        <h1>Attention-Deficit/Hyperactivity Disorder (ADHD)</h1>
        <div className="ADHD-image-container">
        <img src="/assets/images/ADHD1.jpeg" alt="OCD Illustration" className="adhd-image" />
      </div>

        {/* Overview Section */}
        <section id="overview" className="section">
          <h2>Overview</h2>
          <p>
            Attention-deficit/hyperactivity disorder (ADHD) is one of the most common childhood neurodevelopmental disorders. Children with ADHD often have difficulty with inattention, hyperactivity, and impulsivity. Kids usually receive a diagnosis during childhood, and the condition often lasts into adulthood. However, effective treatment is available.
          </p>
          <p>
            ADHD is a long-term (chronic) brain condition that causes executive dysfunction, which means it disrupts a person’s ability to manage their own emotions, thoughts, and actions. ADHD makes it difficult for people to:
          </p>
          <ul>
            <li>Manage their behavior.</li>
            <li>Pay attention.</li>
            <li>Control overactivity.</li>
            <li>Regulate their mood.</li>
            <li>Stay organized.</li>
            <li>Concentrate.</li>
            <li>Follow directions.</li>
            <li>Sit still.</li>
          </ul>
          <p>
            Kids usually receive a diagnosis during childhood, and the condition often lasts into adulthood. However, effective treatment is available. If untreated, ADHD can cause serious, lifelong complications.
          </p>
        </section>

        {/* Signs and Symptoms Section */}
        <section id="signs-and-symptoms" className="section">
          <h2>Signs and Symptoms</h2>
          <p>
            ADHD symptoms can vary depending on the type of ADHD. The three main types are:
          </p>
          <ul>
            <li><strong>Inattentive Type:</strong> Difficulty paying attention, staying organized, and following instructions.</li>
            <li><strong>Hyperactive-Impulsive Type:</strong> Excessive fidgeting, talking, and impulsive behavior.</li>
            <li><strong>Combined Type:</strong> A mix of inattentive and hyperactive-impulsive symptoms.</li>
          </ul>
          <p>
            According to the DSM-5-TR, a child with inattentive presentation must display at least six of the following behaviors:
          </p>
          <ul>
            <li>Trouble paying attention to details or making careless mistakes.</li>
            <li>Issues remaining focused on tasks and activities.</li>
            <li>Difficulty listening well, daydreaming, or seeming distracted.</li>
            <li>Trouble with following instructions and/or finishing tasks.</li>
            <li>Difficulty with organizing tasks and activities.</li>
            <li>Avoiding or disliking tasks that require continuous mental effort.</li>
            <li>Losing things frequently.</li>
            <li>Easily distracted by outside stimuli.</li>
            <li>Forgetful in daily activities.</li>
          </ul>
        </section>

        {/* Causes Section */}
        <section id="causes" className="section">
          <h2>Causes</h2>
          <p>
            The exact cause of ADHD is unknown, but research suggests that genetics, brain structure, and environmental factors may play a role. Risk factors include:
          </p>
          <ul>
            <li>Genetics: ADHD often runs in families.</li>
            <li>Brain anatomy: Differences in brain structure and activity.</li>
            <li>Environmental factors: Lead exposure, premature birth, low birth weight, and substance use during pregnancy.</li>
          </ul>
          <p>
            The following are <strong>not</strong> causes of ADHD:
          </p>
          <ul>
            <li>Allergies.</li>
            <li>Immunizations.</li>
            <li>Eating too much sugar.</li>
            <li>Too much time staring at screens.</li>
            <li>Poor parenting.</li>
            <li>Social and environmental factors such as poverty.</li>
          </ul>
        </section>

        {/* Diagnosis and Tests Section */}
        <section id="diagnosis-and-tests" className="section">
          <h2>Diagnosis and Tests</h2>
          <p>
            ADHD is diagnosed based on a thorough evaluation of symptoms, medical history, and behavior. There is no single test for ADHD, but healthcare providers may use:
          </p>
          <ul>
            <li>Questionnaires and interviews.</li>
            <li>Observations in multiple settings (home, school).</li>
            <li>Guidelines from the DSM-5-TR.</li>
          </ul>
          <p>
            Symptoms must:
          </p>
          <ul>
            <li>Occur in two or more settings (e.g., home and school).</li>
            <li>Considerably impair daily functioning.</li>
            <li>Have started before the age of 12.</li>
            <li>Have persisted for at least six months.</li>
          </ul>
        </section>

        {/* Management and Treatment Section */}
        <section id="management-and-treatment" className="section">
          <h2>Management and Treatment</h2>
          <p>
            Treatment for ADHD typically involves a combination of:
          </p>
          <ul>
            <li><strong>Medication:</strong> Stimulants (e.g., Adderall, Ritalin) and non-stimulants (e.g., Strattera).</li>
            <li><strong>Behavioral Therapy:</strong> Parent training, social skills training, and executive function training.</li>
            <li><strong>Lifestyle Changes:</strong> Healthy diet, regular exercise, and structured routines.</li>
          </ul>
          <p>
            The goal of treatment is to improve symptoms and help individuals function more effectively in daily life.
          </p>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="section">
          <h2>Prevention</h2>
          <p>
            While ADHD cannot be prevented, early diagnosis and treatment can help manage symptoms and improve quality of life. Avoiding exposure to toxins during pregnancy and providing a structured environment for children may also reduce the risk.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ADHDPage;
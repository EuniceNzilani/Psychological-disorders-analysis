import React from 'react';
import './OCDPage.css'; // Import the CSS file

const OCDPage = () => {
  return (
    <div className="ocd-page">
      {/* Header */}
      <header className="ocd-header">
        <div className="logo">OCD</div> {/* Logo at the top left */}
        <nav className="ocd-navbar">
          <ul className="ocd-nav-links">
            <li>
              <a href="/">
                <span role="img" aria-label="Home">🏠</span> Home
              </a>
            </li>
            <li>
              <a href="/about-ocd">
                <span role="img" aria-label="About OCD">🧠</span> About OCD
              </a>
            </li>
            <li>
              <a href="/screening">
                <span role="img" aria-label="Screening Tools">📋</span> Screening Tools
              </a>
            </li>
            <li>
              <a href="/resources">
                <span role="img" aria-label="Resources">📚</span> Resources
              </a>
            </li>
            <li>
              <a href="/community">
                <span role="img" aria-label="Community">👥</span> Community
              </a>
            </li>
          </ul>
        </nav>
        <button className="login-button">Login/Signup</button> {/* Login button on the far right */}
      </header>

      {/* Page Content */}
      <h1>Obsessive-Compulsive Disorder (OCD)</h1>

      {/* Circular Image */}
      <div className="ocd-image-container">
        <img src="/assets/images/OCD1.png" alt="OCD Illustration" className="ocd-image" />
      </div>

      <h2>Overview</h2>
      <p>
        Obsessive-compulsive disorder (OCD) features a pattern of unwanted thoughts and fears known as obsessions. These obsessions lead you to do repetitive behaviors, also called compulsions. These obsessions and compulsions get in the way of daily activities and cause a lot of distress.
      </p>
      <p>
        Ultimately, you feel driven to do compulsive acts to ease your stress. Even if you try to ignore or get rid of bothersome thoughts or urges, they keep coming back. This leads you to act based on ritual. This is the vicious cycle of OCD.
      </p>
      <p>
        OCD often centers around certain themes, such as being overly fearful of getting contaminated by germs. To ease contamination fears, you may wash your hands over and over again until they're sore and chapped.
      </p>
      <p>
        If you have OCD, you may be ashamed, embarrassed, and frustrated about the condition. But treatment can be effective.
      </p>

      <h2>Symptoms</h2>
      <p>
        Obsessive-compulsive disorder usually includes both obsessions and compulsions. But it's also possible to have only obsession symptoms or only compulsion symptoms. You may or may not know that your obsessions and compulsions are beyond reason. But they take up a great deal of time, reduce your quality of life, and get in the way of your daily routines and responsibilities.
      </p>

      <h3>Obsession Symptoms</h3>
      <p>
        OCD obsessions are lasting and unwanted thoughts that keep coming back or urges or images that are intrusive and cause distress or anxiety. You might try to ignore them or get rid of them by acting based on ritual. These obsessions usually intrude when you're trying to think of or do other things.
      </p>
      <p>Obsessions often have themes, such as:</p>
      <ul>
        <li>Fear of contamination or dirt.</li>
        <li>Doubting and having a hard time dealing with uncertainty.</li>
        <li>Needing things to be orderly and balanced.</li>
        <li>Aggressive or horrific thoughts about losing control and harming yourself or others.</li>
        <li>Unwanted thoughts, including aggression, or sexual or religious subjects.</li>
      </ul>

      <h3>Compulsion Symptoms</h3>
      <p>
        OCD compulsions are repetitive behaviors that you feel driven to do. These repetitive behaviors or mental acts are meant to reduce anxiety related to your obsessions or prevent something bad from happening. But taking part in the compulsions brings no pleasure and may offer only limited relief from anxiety.
      </p>
      <p>Common compulsion themes include:</p>
      <ul>
        <li>Washing and cleaning.</li>
        <li>Checking.</li>
        <li>Counting.</li>
        <li>Ordering.</li>
        <li>Following a strict routine.</li>
        <li>Demanding reassurance.</li>
      </ul>

      <h2>Severity Varies</h2>
      <p>
        OCD usually begins in the teen or young adult years, but it can start in childhood. Symptoms usually begin over time and tend to vary in how serious they are throughout life. The types of obsessions and compulsions you have also can change over time. Symptoms generally get worse when you are under greater stress, including times of transition and change. OCD, usually thought to be a lifelong disorder, can have mild to moderate symptoms or be so severe and time-consuming that it becomes disabling.
      </p>

      <h2>When to See a Doctor</h2>
      <p>
        There's a difference between being a perfectionist — someone who needs flawless results or performance — and having OCD. OCD thoughts aren't simply excessive worries about real issues in your life or liking to have things clean or arranged in a specific way.
      </p>
      <p>
        If your obsessions and compulsions affect your quality of life, see your doctor or mental health professional.
      </p>
    </div>
  );
};

export default OCDPage;

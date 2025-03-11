import React from 'react';
import './Community.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Community() {
  return (
    <div className="community">
      <Header />
      <section className="community-intro">
        <h1>Community Support</h1>
        <p>
          Join our moderated peer support groups to connect with others who understand what you’re going through. Share experiences, ask questions, and find support.
        </p>
      </section>
      <section className="community-groups">
        <h2>Featured Groups</h2>
        <div className="group-cards">
          <div className="group-card">
            <h3>OCD Support Group</h3>
            <p>A safe space for individuals with OCD.</p>
            <button>Join Group</button>
          </div>
          <div className="group-card">
            <h3>ADHD Support Group</h3>
            <p>Connect with others managing ADHD.</p>
            <button>Join Group</button>
          </div>
          <div className="group-card">
            <h3>Anxiety Support Group</h3>
            <p>Share and learn coping strategies.</p>
            <button>Join Group</button>
          </div>
          <div className="group-card">
            <h3>Depression Support Group</h3>
            <p>Find support and understanding for depression.</p>
            <button>Join Group</button>
          </div>
          <div className="group-card">
            <h3>Bipolar Support Group</h3>
            <p>Connect with others managing bipolar disorder.</p>
            <button>Join Group</button>
          </div>
          <div className="group-card">
            <h3>PTSD Support Group</h3>
            <p>A safe space for individuals dealing with PTSD.</p>
            <button>Join Group</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Community;
import React from 'react';
import './Resources.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Resources() {
  return (
    <div className="resources">
      <Header />
      <section className="resources-intro">
        <h1>Resources</h1>
        <p>
          Explore a wide range of resources tailored to your mental health needs. From articles to therapy options, we’ve got you covered.
        </p>
      </section>
      <section className="resource-categories">
        <h2>Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <h3>Articles</h3>
            <p>Read evidence-based articles on mental health.</p>
          </div>
          <div className="category-card">
            <h3>Therapy Options</h3>
            <p>Find the right therapy for your needs.</p>
          </div>
          <div className="category-card">
            <h3>Self-Help Tools</h3>
            <p>Access tools to manage your mental health.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Resources;
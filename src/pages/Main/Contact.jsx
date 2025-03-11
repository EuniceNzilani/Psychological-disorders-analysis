import React, { useState } from 'react';
import './Contact.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // In a real application, you would send the form data to your backend here
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/yourcompany', color: '#E1306C' },
    { name: 'WhatsApp', icon: 'fa-whatsapp', url: 'https://wa.me/yourphonenumber', color: '#25D366' },
    { name: 'X', icon: 'fa-twitter', url: 'https://x.com/yourcompany', color: '#000000' },
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/yourcompany', color: '#1877F2' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/company/yourcompany', color: '#0A66C2' },
    { name: 'Telegram', icon: 'fa-telegram-plane', url: 'https://t.me/yourcompany', color: '#0088cc' }
  ];

  return (
    <div className="contact">
      <Header />
      <section className="contact-intro">
        <h1>Contact Us</h1>
        <p>
          Have questions or need support? Reach out to us! We're here to help you with any inquiries or feedback.
        </p>
      </section>
      
      <div className="contact-container">
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          {formStatus.submitted ? (
            <div className="form-success">
              <p>{formStatus.message}</p>
              <button onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {formStatus.error && <div className="form-error">{formStatus.message}</div>}
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message *" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          )}
        </section>
        
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Our Address</h3>
              <p>123 Business Avenue, Suite 100, Nairobi, Kenya</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h3>Phone Number</h3>
              <p>+254794846559</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email Address</h3>
              <p>eunicenzilani881@.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9am - 5pm</p>
            </div>
          </div>
        </section>
      </div>
      
      <section className="social-links">
        <h2>Connect With Us</h2>
        <p>Follow us on social media to stay updated with our latest news and announcements.</p>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label={link.name}
            >
              <i className={`fab ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </section>
      
      {/* <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and news directly to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </section> */}
      <Footer />
    </div>
  );
}

export default Contact;
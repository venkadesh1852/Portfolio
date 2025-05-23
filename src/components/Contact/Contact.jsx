import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import useScrollReveal from '../../utils/ScrollReveal';
import './Contact.css';

const Contact = () => {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any inquiries or collaboration opportunities. I'll get back to you as soon as possible.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon">
                   <FaEnvelope />
                </div>
                <div className="details">
                  <h4>Email</h4>
                  <p>Venkadeshpandian9952@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="details">
                  <h4>Phone</h4>
                  <p>9952829542</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="details">
                  <h4>Location</h4>
                  <p>Virudhunager,TamilNadu</p>
                </div>
              </div>
            </div>
            
            <div className="availability">
              <h4>Current Availability</h4>
              <p>I'm currently available for freelance work and full-time positions. I'm also open to discussing potential collaborations or partnerships.</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
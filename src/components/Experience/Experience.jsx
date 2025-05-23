import { useState } from 'react';
import useScrollReveal from '../../utils/ScrollReveal';
import './Experience.css';

const Experience = () => {
  const sectionRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Alagutech solutions',
      position: 'Junior software Developer',
      period: 'Jan 2025 - Present',
      description: 'Led the frontend development team in building a modern, responsive web application serving over 50,000 users. Implemented new features that increased user engagement by 35%. Optimized application performance resulting in a 40% improvement in load times.',
      responsibilities: [
        'Architecting and developing frontend solutions using React.js',
        'Leading code reviews and implementing best practices',
        'Mentoring junior developers and conducting technical interviews',
        'Collaborating with UX/UI designers to implement pixel-perfect designs',
        'Optimizing application performance and accessibility'
      ]
    },
  ];

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-container">
          <div className="tabs">
            {experiences.map((exp, index) => (
              <button 
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="company-name">{exp.company}</span>
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`tab-panel ${activeTab === index ? 'active' : ''}`}
              >
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <h4>Key Responsibilities:</h4>
                <ul className="responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
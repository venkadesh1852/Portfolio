// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skillsData = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Python','Django', 
   'MongoDB','REST APIs','Git','GitHub','WordPress','Digital Marketing','UI/UX Design',
];

const Skills = () => {
  return (
    <section id="skills">
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default Skills;


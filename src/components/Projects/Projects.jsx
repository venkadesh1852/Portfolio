import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useScrollReveal from '../../utils/ScrollReveal';
import './Projects.css';
import project1 from '../../Image/project1.jpg';
import project2 from '../../Image/project2.jpg';
import project3 from '../../Image/traval agancy.jpg';
import project4 from '../../Image/cricket.jpg';
import project5 from '../../Image/recharge.jpg';
import project6 from '../../Image/uiux.png';
const Projects = () => {
  const sectionRef = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      category: 'Frontenddevelopment',
      image: project1,
      description: 'A creative portfolio website with smooth animations and responsive design for a photographer.',
      technologies: ['React.js','CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 2,
      title: 'E-commerce Platform(Apple Hub)',
      category: 'Fullstackdevelopment',
      image: project2,
      description: 'A fully responsive e-commerce platform built with Django, featuring product listings, cart functionality, and user authentication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLLite'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/venkadesh1852/Apple-hub-'
    },
    {
      id: 3,
      title: 'Travel Agency ',
      category: 'Fullstackdevelopment',
      image: project3,
      description: 'An online platform for booking hotels,Rooms and activities with user reviews and recommendations.',
      technologies:  ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLLite'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 4,
      title: 'Cricket Website',
      category: 'Fullstackdevelopment',
      image: project4,
      description: 'A fully responsive e-commerce platform built with Django, featuring product listings, cart functionality, and user authentication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLLite'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/venkadesh1852/PhoenixCricketClub'
    },
    {
      id: 5,
      title: 'Recharge Application',
      category: 'Frontenddevelopment',
      image: project5,
      description: 'A mobile and DTH recharge application with user-friendly interface and secure payment options.',
      technologies: ['React.js','CSS','Booststrap'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'ui/ux', 
      image: project6,
      description: 'The food delivery app is designed with a user-centric UI/UX approach to ensure a seamless, intuitive, and enjoyable food ordering experience. The interface features a clean and modern layout, prioritizing ease of navigation with clear categories, prominent search functionality, and smart filters.',
      technologies: ['Figma', 'Adobe XD', 'Sketch','Canva'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'Frontenddevelopment' ? 'active' : ''}`}
            onClick={() => setFilter('Frontenddevelopment')}
          >
           Frontenddevelopment
          </button>
          <button 
            className={`filter-btn ${filter === 'Fullstackdevelopment' ? 'active' : ''}`}
            onClick={() => setFilter('Fullstackdevelopment')}
          >
          Fullstackdevelopment
          </button>
          <button 
            className={`filter-btn ${filter === 'ui/ux' ? 'active' : ''}`}
            onClick={() => setFilter('ui/ux')}
          >
            UI/UX
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <FaGithub />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
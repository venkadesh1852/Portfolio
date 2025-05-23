import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useScrollReveal from '../../utils/ScrollReveal';
import './Hero.css';
import myimage from '../../Image/myimage.png';
const Hero = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Venkadeshpandian</span>
            <span className="job-title">Frontend Developer</span>
          </h1>
          <p className="hero-description">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, user-friendly applications with modern technologies.
          </p>
          <div className="hero-cta">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn primary-btn"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn secondary-btn"
            >
              Contact Me
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={myimage} alt="Professional portrait" />
          </div>
        
        </div>
      </div>
      <div className="scroll-down">
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
        >
          <span className="mouse">
            <span className="wheel"></span>
          </span>
          <div className="arrow">
            <span></span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
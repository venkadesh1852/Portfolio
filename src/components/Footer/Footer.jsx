import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="logo"
            >
              Portfolio
            </Link>
            <p>Building exceptional digital experiences with creative solutions.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="skills" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="experience" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="education" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> Venkadeshpandian9952@gmail.com</p>
            <p><strong>Phone:</strong> 91+ 9952829542</p>
            <p><strong>Location:</strong> Virudhunager,TamilNadu</p>
            
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:venkadeshpandian9952@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Venkadesh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
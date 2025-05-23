import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="logo"
        >
          <span>Portfolio</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              activeClass="active" 
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              activeClass="active" 
              onClick={closeMenu}
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
              activeClass="active" 
              onClick={closeMenu}
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
              activeClass="active" 
              onClick={closeMenu}
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
              activeClass="active" 
              onClick={closeMenu}
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
              activeClass="active" 
              onClick={closeMenu}
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
              activeClass="active" 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
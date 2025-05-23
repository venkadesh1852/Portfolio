import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'visible';
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <h2>Loading</h2>
        </div>
      ) : (
        <>
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;

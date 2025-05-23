import useScrollReveal from '../../utils/ScrollReveal';
import './About.css';
import myimage from '../../Image/myimage.png';
const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="frame">
              <img src={myimage} alt="Working on laptop" />
            </div>
            
          </div>
          
          <div className="about-text">
            <p>
              Hello! I'm Venkadeshpandian, a passionate frontend developer with a love for creating beautiful, functional, and user-centered digital experiences. With over 5+Months of experience in the field, I enjoy bringing ideas to life in the browser.
            </p>
            <p>
              My approach to development focuses on writing clean, efficient code while ensuring the end product delivers an exceptional user experience. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen. I believe that diverse interests fuel creativity and problem-solving in my professional work.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Venkadeshpandian</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">venkadeshpandian9952@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Virudhunager,Tamilnadu</span>
              </div>
              <div className="info-item">
                <span className="info-title">Phone:</span>
                <span className="info-value">+91 9952829542</span>
                </div>
            </div>
            
            <a href="/venkadesh pandian.pdf" target='_blank' className="btn download-btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
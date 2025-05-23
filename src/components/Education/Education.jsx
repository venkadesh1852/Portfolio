import useScrollReveal from '../../utils/ScrollReveal';
import './Education.css';

const Education = () => {
  const sectionRef = useScrollReveal();

  const education = [
    {
      id: 1,
      institution: 'Vhnsn College ',
      degree: 'PGDCA',
      period: '2023 - 2024',
      description: 'Completed a comprehensive program in computer applications,focusing on software development, database management, and webtechnologies.',
      achievements: [
        'Dean\'s List for academic excellence',
        'GPA: 7.6/10',
        'Graduated with Honorss',
      ]
    },
    {
      id: 2,
      institution: 'Vhnsn College',
      degree: 'Master of Commerce with Computer Applications',
      period: '2022 - 2024',
      description: 'Commerce graduate with a specialization in Computer Applications,combining business acumen with strong technical skills in software,databases, and e-commerce platforms.',
      achievements: [
        'Graduated Cum Laude with 3.8 GPA',
      ]
    },
    {
      id: 3,
      institution: 'Vhnsn College',
      degree: 'Bachelor of Commerce with Computer Applications',
      period: '2019-2022',
      description: 'Commerce graduate with a specialization in Computer Applications,combining business acumen with strong technical skills in software,databases, and e-commerce platforms.',
      achievements: [
        'Completed with distinction (95% score)',
        'Participated in various workshops and seminars on web development',
      ]
    }
  ];

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="time-period">{item.period}</div>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
                
                <div className="achievements">
                  <h5>Achievements</h5>
                  <ul>
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
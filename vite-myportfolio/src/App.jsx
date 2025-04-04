import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [isVisible, setIsVisible] = useState({});
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  const skills = [
    { name: 'HTML', level: 80, color: '#E34F26', icon: 'fa-html5' },
    { name: 'CSS', level: 80, color: '#1572B6', icon: 'fa-css3-alt' },
    { name: 'JavaScript', level: 50, color: '#F7DF1E', icon: 'fa-js' },
    { name: 'React', level: 50, color: '#61DAFB', icon: 'fa-react' },
    { name: 'Vite', level: 50, color: '#646CFF', icon: 'fa-code' },
    { name: 'Java', level: 70, color: '#007396', icon: 'fa-java' }
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-left">
            <a href="#home" className="nav-brand">
              <span className="highlight">Ashley</span>
            </a>
          </div>
          <div className="nav-center">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-right">
            <div className="social-links">
              <a href="https://web.facebook.com/ashley.marie.caromay.2024" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" className="social-link">
                <i className="far fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/asliecy/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">Ashley Marie Caromay</h1>
              <p className="hero-subtitle">UI/UX Designer</p>
              <p className="hero-description">
                Crafting user-friendly, visually appealing, 
                and intuitive digital experiences.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="hire-btn">Hire Me</a>
                <div className="social-links">
                  <a href="https://web.facebook.com/ashley.marie.caromay.2024" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="far fa-envelope"></i>
                  </a>
                  <a href="https://www.instagram.com/asliecy/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-img-container">
                <img 
                  src="/images/picture.jpg" 
                  alt="Ashley Marie Caromay" 
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`about ${isVisible.about ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title text-center">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
I am a passionate UI/UX designer dedicated to creating intuitive and visually engaging 
digital experiences. With a keen eye for design and a deep understanding of user behavior, 
I craft seamless interfaces that enhance usability and drive engagement. From wireframes to prototypes, 
I focus on user-centered design principles to build products
 that are both functional and aesthetically compelling.
              </p>
            </div>
            <h3 className="skills-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item"
                  style={{ 
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="skill-header">
                    <i className={`fab ${skill.icon}`}></i>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: isVisible.about ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`projects ${isVisible.projects ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title text-center">My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/images/iskor.jpg" alt="Iskor" />
                <div className="project-overlay">
                  <a href="https://iskor-isbb.onrender.com/#/get-started" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Gemperle-Student/iskormain" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Project 1</h3>
                <p>Smart Tracking. Better Teaching. Brighter Grading.</p>
                <div className="project-tech">
                <span>MonggoDB</span>
                  <span>Express</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/images/awesome.jpg" alt="Awesome Todos" />
                <div className="project-overlay">
                  <a href="https://awesometodosapp-31v7.onrender.com" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Caromay/awesometodosapp" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Project 2</h3>
                <p>Your Ultimate To-do list.</p>
                <div className="project-tech">
                  <span>MonggoDB</span>
                  <span>Express</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/images/portfolio.jpg" alt="My Portfolio" />
                <div className="project-overlay">
                  <a href="https://portfolio-1-qi7f.onrender.com/" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Caromay/portfolio" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Project 3</h3>
                <p>Portfolio.</p>
                <div className="project-tech">
                <span>MonggoDB</span>
                  <span>Express</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`contact ${isVisible.contact ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
              <textarea
                placeholder="Your Message"
                className="form-input"
                rows="6"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message<span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="contact-info">
                <a href="https://mail.google.com/mail/u/0/#inbox" className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span>caromayashleymarie@gmail.com</span>
                </a>
                <a href="09469291281" className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <span>+639469291281</span>
                </a>
                <a href="https://www.philatlas.com/visayas/r06/capiz/tapaz.html" className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <span>Tapaz, Capiz</span>
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-social">
                <a href="https://web.facebook.com/ashley.marie.caromay.2024" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>
                <a href="mailto:your.email@gmail.com">
                  <div className="social-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/asliecy/" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
              </div>
              <div className="footer-copyright">
                {currentYear} Ashley Marie Caromay. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

import React from 'react';
import Navbar from './components/Navbar';
import './components/Contact.css';
import './components/Services.css';
import './components/About.css';
import './components/Home.css';
import './components/Portfolio.css'; 


function App() {
  return (
    <>
      <Navbar />

      {}
      <section id="home" className="home-section">
        <h1>Welcome to Our World of Innovation</h1>
        <p>
          We blend creativity with technology to deliver digital solutions that transform businesses. Whether you're a startup or an
          enterprise, we help you thrive in the digital landscape with websites, apps, and AI-powered tools that are modern,
          responsive, and future-ready.
        </p>
        <button 
          className="home-btn" 
          onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
        >
          Explore Services
        </button>
      </section>

      {}
      {}
<section id="about" className="about-section">
  <div className="about-image">
    <img
      src="/team.png" 
      alt="Our Team"
    />
  </div>
  <div className="about-content">
    <h1>About Us</h1>
    <p>
      We are a passionate team of developers, designers, and strategists committed to creating exceptional digital products.
      Our mission is to deliver innovative and impactful solutions tailored to each client’s unique vision. With years of
      experience and a focus on collaboration, we pride ourselves on turning ideas into results. From web development to
      AI-driven solutions, we blend creativity and technology to help brands grow in the digital world. We don't just build — 
      we innovate, improve, and inspire.
    </p>
  </div>
</section>

      {}
      <section id="services" className="services-section">
        <h1>Services</h1>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <div className="service-title">Web Development</div>
            <div className="service-desc">
              We craft responsive and high-performing websites tailored to your brand, optimized for performance and accessibility.
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">Full Stack Development</div>
            <div className="service-desc">
              From front-end to back-end, we deliver complete web solutions using modern technologies like React, Node.js, and more.
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">🤖</div>
            <div className="service-title">AI & Machine Learning</div>
            <div className="service-desc">
              Unlock intelligent automation with AI-powered tools, predictive analytics, and machine learning solutions built for your needs.
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="portfolio" className="portfolio-section">
        <h1>Our Work</h1>
        <p>
          Take a look at some of the amazing projects we've worked on. Our portfolio showcases a curated selection of websites, apps, and digital products.
          These projects highlight our skills, creativity, and dedication to building meaningful digital solutions.
        </p>

        <div className="portfolio-container">
          <div className="portfolio-card">
            <img src="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png" alt="Project 1" />
            <div className="card-content">
              <h2>E-Commerce</h2>
              <p>
                A modern, responsive website built for a retail client. This project combines design, e-commerce, and a user-friendly interface.
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <img src="https://www.agilecrm.com/img/dashboard-new/dashboard.png" alt="Project 2" />
            <div className="card-content">
              <h2>CRM</h2>
              <p>
                A custom web application developed for managing customer relationships with a clean and efficient user interface.
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <img src="https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/658104b53fe416ed11997a90_8fa0c3fc-1438-40ff-9b82-ac9529521b78.png" alt="Project 3" />
            <div className="card-content">
              <h2>Fitness App</h2>
              <p>
                A mobile app designed to help users track their fitness goals and progress. Integrated with social media features.
              </p>
            </div>
          </div>

          {}
        </div>
      </section>

      {}
      <div id="contact" className="contact-section">
        <h1>Contact</h1>
        <p>
        We’d love to hear from you! Whether you have a question, need a quote, or just want to say hello — feel free to reach out.

Our team is friendly, responsive, and ready to help bring your ideas to life. Let’s build something great together!        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
            

    </>
  );
}

export default App;

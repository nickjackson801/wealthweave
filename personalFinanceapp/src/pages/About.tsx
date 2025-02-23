import './About.css'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Democratizing Financial Knowledge</h1>
        <p className="about-subtitle">Making elite financial education accessible to everyone</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At WealthWeave, we believe that high-quality financial education shouldn't be reserved for the wealthy. 
          Our mission is to provide everyone with the same level of financial knowledge that has traditionally 
          been accessible only to Ultra-High-Net-Worth individuals.
        </p>
      </section>

      <section className="why-section">
        <h2>Why It Matters</h2>
        <div className="why-grid">
          <div className="why-item">
            <h3>The Knowledge Gap</h3>
            <p>
              Ultra High-Net-Worth individuals have access to private wealth managers, family offices, and 
              sophisticated financial strategies. This knowledge gap perpetuates wealth inequality. We're here 
              to bridge that gap.
            </p>
          </div>
          <div className="why-item">
            <h3>Financial Empowerment</h3>
            <p>
              Understanding personal finance isn't just about growing wealth—it's about making informed decisions, 
              securing your future, and having the freedom to live life on your own terms.
            </p>
          </div>
          <div className="why-item">
            <h3>Breaking Barriers</h3>
            <p>
              Traditional financial education often comes with high costs or conflicts of interest. We provide 
              unbiased, comprehensive education that puts your interests first.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2>Our Approach</h2>
        <div className="approach-content">
          <div className="approach-item">
            <h3>Comprehensive Curriculum</h3>
            <p>
              From basic budgeting to sophisticated investment strategies, our curriculum covers everything 
              you'd learn from a private wealth manager.
            </p>
          </div>
          <div className="approach-item">
            <h3>Expert Knowledge</h3>
            <p>
              Our content is developed by financial professionals who have worked with High-Net-Worth clients, 
              bringing that expertise directly to you.
            </p>
          </div>
          <div className="approach-item">
            <h3>Practical Application</h3>
            <p>
              Every concept is taught with real-world applications, helping you implement sophisticated 
              financial strategies in your own life.
            </p>
          </div>
        </div>
      </section>

      <section className="commitment-section">
        <h2>Our Commitment</h2>
        <p>
          We're committed to maintaining the highest standards of education while keeping our platform 
          accessible. While traditional wealth management services might require millions in assets, 
          we believe everyone deserves access to the same knowledge and strategies.
        </p>
        <div className="cta-container">
          <button className="start-learning-btn" onClick={() => navigate('/')}>
            Start Your Financial Journey
          </button>
        </div>
      </section>
    </div>
  )
}

export default About 
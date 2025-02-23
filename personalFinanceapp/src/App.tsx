import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom'
import About from './pages/About'
import Pricing from './pages/Pricing'
import CourseContent from './pages/courses/CourseContent'

function Header() {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false)

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>WealthWeave</div>
      <nav className="nav-links">
        <button 
          className="nav-btn home-btn"
          onClick={() => navigate('/')}
          title="Home"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="home-icon"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </button>
        <div className="dropdown">
          <button 
            className="features-btn"
            onClick={() => setShowFeatures(!showFeatures)}
            onBlur={() => setTimeout(() => setShowFeatures(false), 200)}
          >
            Features
          </button>
          {showFeatures && (
            <div className="features-dropdown">
              <div className="feature-category">
                <h3>Beginner Essentials</h3>
                <ul>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/emergency-funds');
                        setShowFeatures(false);
                      }}
                    >
                      Building Emergency Funds
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/budgeting');
                        setShowFeatures(false);
                      }}
                    >
                      Budgeting Techniques & Tools
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/credit-scores');
                        setShowFeatures(false);
                      }}
                    >
                      Understanding Credit Scores
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/tax-planning-basics');
                        setShowFeatures(false);
                      }}
                    >
                      Basic Tax Planning
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/financial-goals');
                        setShowFeatures(false);
                      }}
                    >
                      Setting Financial Goals
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/debt-management');
                        setShowFeatures(false);
                      }}
                    >
                      Debt Management Strategies
                    </button>
                  </li>
                </ul>
              </div>
              <div className="feature-category">
                <h3>Intermediate Investing</h3>
                <ul>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/stock-market');
                        setShowFeatures(false);
                      }}
                    >
                      Stock Market Fundamentals
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/etf-mutual-funds');
                        setShowFeatures(false);
                      }}
                    >
                      ETFs & Mutual Funds
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/real-estate');
                        setShowFeatures(false);
                      }}
                    >
                      Real Estate Investment
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/retirement-planning');
                        setShowFeatures(false);
                      }}
                    >
                      Retirement Planning
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/portfolio-diversification');
                        setShowFeatures(false);
                      }}
                    >
                      Portfolio Diversification
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/risk-management');
                        setShowFeatures(false);
                      }}
                    >
                      Risk Management
                    </button>
                  </li>
                </ul>
              </div>
              <div className="feature-category">
                <h3>Advanced Trading</h3>
                <ul>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/options-trading');
                        setShowFeatures(false);
                      }}
                    >
                      Options Trading Strategies
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/technical-analysis');
                        setShowFeatures(false);
                      }}
                    >
                      Technical Analysis
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/margin-trading');
                        setShowFeatures(false);
                      }}
                    >
                      Margin Trading
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/forex-trading');
                        setShowFeatures(false);
                      }}
                    >
                      Forex Trading
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/algorithmic-trading');
                        setShowFeatures(false);
                      }}
                    >
                      Algorithmic Trading
                    </button>
                  </li>
                  <li>
                    <button 
                      className="course-link-btn"
                      onClick={() => {
                        navigate('/courses/derivatives');
                        setShowFeatures(false);
                      }}
                    >
                      Advanced Derivatives
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <button 
          className="nav-btn"
          onClick={() => navigate('/about')}
        >
          About
        </button>
        <button 
          className="nav-btn"
          onClick={() => navigate('/pricing')}
        >
          Pricing
        </button>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  )
}

function MainContent() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>Master Your Financial Future</h1>
        <p className="hero-subtitle">
          From basic budgeting to advanced trading strategies - all in one place, completely free.
        </p>
        
        <div className="features-grid">
          <div className="feature-item">
            <h3>Beginner Friendly</h3>
            <p>Master the basics of saving, budgeting, and building credit</p>
          </div>
          <div className="feature-item">
            <h3>Intermediate Skills</h3>
            <p>Learn about stock markets, real estate investing, and retirement planning</p>
          </div>
          <div className="feature-item">
            <h3>Advanced Strategies</h3>
            <p>Explore options trading, leverage, and advanced portfolio management</p>
          </div>
        </div>

        <div className="cta-section">
          <p className="trial-badge">Start 7-Day Free Trial</p>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to begin"
              required
            />
            <button type="submit">Start Free Trial</button>
          </form>
          <p className="form-subtext">
            Try all features free for 7 days, then $9.99/month. Cancel anytime.
          </p>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter basename="/wealthweave">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<><Header /><MainContent /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/pricing" element={<><Header /><Pricing /></>} />
          <Route path="/courses/:courseId" element={<><Header /><CourseContent /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


import './Pricing.css'
import { useNavigate } from 'react-router-dom'

function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <h1>Choose Your Learning Path</h1>
        <p className="pricing-subtitle">Start with a 7-day free trial on any plan</p>
      </header>

      <div className="pricing-grid">
        <div className="pricing-card">
          <div className="pricing-card-header">
            <h2>Beginner</h2>
            <div className="price">
              <span className="amount">$0</span>
              <span className="period">/month</span>
            </div>
          </div>
          <div className="pricing-features">
            <ul>
              <li>Basic Budgeting Techniques</li>
              <li>Emergency Fund Planning</li>
              <li>Credit Score Basics</li>
              <li>Debt Management</li>
              <li>Basic Tax Planning</li>
              <li>Financial Goal Setting</li>
            </ul>
          </div>
          <button 
            className="pricing-cta-btn free"
            onClick={() => navigate('/')}
          >
            Start Learning Free
          </button>
        </div>

        <div className="pricing-card featured">
          <div className="popular-badge">Most Popular</div>
          <div className="pricing-card-header">
            <h2>Intermediate</h2>
            <div className="price">
              <span className="amount">$4</span>
              <span className="decimal">.99</span>
              <span className="period">/month</span>
            </div>
          </div>
          <div className="pricing-features">
            <ul>
              <li>Everything in Beginner</li>
              <li>Stock Market Fundamentals</li>
              <li>ETF & Mutual Fund Analysis</li>
              <li>Real Estate Basics</li>
              <li>Retirement Planning</li>
              <li>Portfolio Diversification</li>
            </ul>
          </div>
          <button 
            className="pricing-cta-btn"
            onClick={() => navigate('/')}
          >
            Start 7-Day Free Trial
          </button>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-header">
            <h2>Advanced</h2>
            <div className="price">
              <span className="amount">$9</span>
              <span className="decimal">.99</span>
              <span className="period">/month</span>
            </div>
          </div>
          <div className="pricing-features">
            <ul>
              <li>Everything in Intermediate</li>
              <li>Options Trading</li>
              <li>Technical Analysis</li>
              <li>Margin & Leverage</li>
              <li>Advanced Portfolio Management</li>
              <li>Tax-Efficient Investing</li>
            </ul>
          </div>
          <button 
            className="pricing-cta-btn"
            onClick={() => navigate('/')}
          >
            Start 7-Day Free Trial
          </button>
        </div>
      </div>

      <div className="pricing-footer">
        <div className="guarantee">
          <h3>7-Day Free Trial on All Paid Plans</h3>
          <p>Try any plan risk-free. Cancel anytime during the trial period.</p>
        </div>
        <div className="faq">
          <h3>Common Questions</h3>
          <div className="faq-item">
            <h4>Can I switch plans?</h4>
            <p>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div className="faq-item">
            <h4>What's included in the free trial?</h4>
            <p>You get full access to all features of your chosen plan during the trial period.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing 
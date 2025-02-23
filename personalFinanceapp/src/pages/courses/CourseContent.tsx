import { useParams } from 'react-router-dom'
import './CourseContent.css'

function CourseContent() {
  const { courseId } = useParams();
  
  // This would eventually come from your backend
  const courseData: Record<string, { title: string; level: string; description: string }> = {
    'emergency-funds': {
      title: 'Building Emergency Funds',
      level: 'Beginner',
      description: 'Learn how to build and maintain an emergency fund that will protect you during financial uncertainties.'
    },
    'budgeting': {
      title: 'Budgeting Techniques & Tools',
      level: 'Beginner',
      description: 'Master essential budgeting strategies and use modern tools to manage your finances effectively.'
    },
    'credit-scores': {
      title: 'Understanding Credit Scores',
      level: 'Beginner',
      description: 'Learn what makes up your credit score and how to improve it.'
    },
    'stock-market': {
      title: 'Stock Market Fundamentals',
      level: 'Intermediate',
      description: 'Understand how the stock market works and learn basic investment strategies.'
    },
    'etf-mutual-funds': {
      title: 'ETFs & Mutual Funds',
      level: 'Intermediate',
      description: 'Compare different investment vehicles and learn how to build a diversified portfolio.'
    },
    'real-estate': {
      title: 'Real Estate Investment',
      level: 'Intermediate',
      description: 'Learn the fundamentals of real estate investing, from residential to commercial properties.'
    },
    'retirement-planning': {
      title: 'Retirement Planning',
      level: 'Intermediate',
      description: 'Master retirement account types, contribution strategies, and long-term planning.'
    },
    'portfolio-diversification': {
      title: 'Portfolio Diversification',
      level: 'Intermediate',
      description: 'Learn how to build a well-balanced portfolio across different asset classes.'
    },
    'risk-management': {
      title: 'Risk Management',
      level: 'Intermediate',
      description: 'Understand different types of risk and strategies to protect your investments.'
    },
    'options-trading': {
      title: 'Options Trading Strategies',
      level: 'Advanced',
      description: 'Learn advanced options trading strategies and risk management techniques.'
    },
    'technical-analysis': {
      title: 'Technical Analysis',
      level: 'Advanced',
      description: 'Master chart patterns, indicators, and technical analysis tools.'
    },
    'margin-trading': {
      title: 'Margin Trading',
      level: 'Advanced',
      description: 'Understand leverage, margin requirements, and advanced risk management.'
    },
    'forex-trading': {
      title: 'Forex Trading',
      level: 'Advanced',
      description: 'Learn currency trading strategies and global market dynamics.'
    },
    'algorithmic-trading': {
      title: 'Algorithmic Trading',
      level: 'Advanced',
      description: 'Introduction to automated trading strategies and basic programming concepts.'
    },
    'derivatives': {
      title: 'Advanced Derivatives',
      level: 'Advanced',
      description: 'Master complex derivative instruments and advanced trading strategies.'
    }
  }

  const course = courseData[courseId as keyof typeof courseData] || {
    title: 'Course Not Found',
    level: 'N/A',
    description: 'This course could not be found.'
  }

  return (
    <div className="course-content">
      <header className="course-header">
        <h1>{course.title}</h1>
        <span className={`course-level ${course.level.toLowerCase()}`}>
          {course.level}
        </span>
      </header>
      <div className="course-body">
        <p className="course-description">{course.description}</p>
        <div className="course-material">
          <h2>Course Content Coming Soon</h2>
          <p>We're currently developing this course material. Check back soon!</p>
        </div>
      </div>
    </div>
  )
}

export default CourseContent 
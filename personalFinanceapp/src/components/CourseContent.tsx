import { useParams } from 'react-router-dom'
import './CourseContent.css'

function CourseContent() {
  const { courseId } = useParams();
  
  // This would eventually come from your backend
  const courseData = {
    'emergency-funds': {
      title: 'Building Emergency Funds',
      level: 'Beginner',
      description: 'Learn how to build and maintain an emergency fund...'
    },
    // Add data for other courses
  }

  const course = courseData[courseId as keyof typeof courseData]

  return (
    <div className="course-content">
      <header className="course-header">
        <h1>{course.title}</h1>
        <span className="course-level">{course.level}</span>
      </header>
      <div className="course-body">
        <p>{course.description}</p>
        {/* Add actual course content here */}
      </div>
    </div>
  )
}

export default CourseContent 
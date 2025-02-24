import { useNavigate } from 'react-router-dom'
import './Courses.css'

function BeginnerCourse() {
  const navigate = useNavigate();
  
  return (
    <div className="course-container">
      <h1>Beginner Course Content</h1>
      {/* Course content will go here */}
    </div>
  )
}

export default BeginnerCourse 
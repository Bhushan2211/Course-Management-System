import logo from './logo.svg';
import './App.css';
import Course from './components/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <div>
      <AllCourses />
      <AddCourse />
    </div>
  );
}

export default App;

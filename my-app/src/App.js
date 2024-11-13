import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateCourseClick = () => {
    navigate("/create-course");
  };

  return (
    <div>
      <h2>Welcome to Course Creation & Assignment</h2>
      <button onClick={handleCreateCourseClick}>Create & Assign Course</button>
    </div>
  );
};

const CreateCoursePage = () => {
  const [courseList, setCourseList] = useState([]);

  const handleCreateCourse = (newCourse) => {
    setCourseList([...courseList, newCourse]);
  };

  return (
    <div className="container">
      <h2>Create & Assign Course</h2>
      <CourseForm onCreateCourse={handleCreateCourse} />
      <CourseList courses={courseList} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-course" element={<CreateCoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;

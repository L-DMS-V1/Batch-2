import React from "react";

function SummarySection({ courses }) {
  return (
    <div>
      <h3>Employee Course Summary</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.courseName} - {course.employees.map(emp => emp.id).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SummarySection;

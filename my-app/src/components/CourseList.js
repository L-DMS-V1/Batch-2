// components/CourseList.js
import React from "react";

function CourseList({ courses }) {
  return (
    <div>
      <h3>Assigned Courses</h3>
      {courses.length === 0 ? (
        <p>No courses assigned yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Course Name</th>
              <th>Course Description</th>
              <th>Course Content</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.selectedEmployee}</td>
                <td>{course.courseName}</td>
                <td>{course.courseDescription}</td>
                <td>
                  {course.multimediaType === "YouTube" ? (
                    <a href={course.mediaUrl} target="_blank" rel="noreferrer">
                      {course.mediaUrl}
                    </a>
                  ) : (
                    <video controls src={course.mediaUrl} width="150" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CourseList;

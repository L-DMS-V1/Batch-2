import React from "react";

function AssignedCourses({ courses }) {
  return (
    <div>
      <h2>Assigned Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Course Name</th>
            <th>Course Description</th>
            <th>Content Type</th>
            <th>Media URL</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.selectedEmployee}</td>
              <td>{course.courseName}</td>
              <td>{course.courseDescription}</td>
              <td>{course.contentType}</td>
              <td>
                {course.contentType === "youtube" ? (
                  <a href={course.mediaUrl} target="_blank" rel="noreferrer">
                    View
                  </a>
                ) : (
                  <video controls src={course.mediaUrl} width="150" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssignedCourses;

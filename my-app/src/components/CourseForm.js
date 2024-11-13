// components/CourseForm.js
import React, { useState } from "react";

function CourseForm({ onCreateCourse }) {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [multimediaType, setMultimediaType] = useState("YouTube");
  const [mediaUrl, setMediaUrl] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);

  const employees = Array.from({ length: 20 }, (_, i) => `Employee ${i + 1}`);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (courseName && courseDescription && selectedEmployee) {
      const newCourse = {
        courseName,
        courseDescription,
        multimediaType,
        mediaUrl: multimediaType === "YouTube" ? mediaUrl : videoPreviewUrl,
        selectedEmployee,
      };
      onCreateCourse(newCourse);
      resetForm();
    } else {
      alert("Please fill all required fields.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("video")) {
      setVideoPreviewUrl(URL.createObjectURL(file));
      setMediaUrl(file.name);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const resetForm = () => {
    setCourseName("");
    setCourseDescription("");
    setMultimediaType("YouTube");
    setMediaUrl("");
    setSelectedEmployee("");
    setVideoPreviewUrl(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Course Name</label>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        required
      />
      <label>Course Description</label>
      <textarea
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
        rows="3"
        required
      />
      <label>Multimedia Content</label>
      <div>
        <label>
          <input
            type="radio"
            checked={multimediaType === "YouTube"}
            onChange={() => setMultimediaType("YouTube")}
          />
          YouTube URL
        </label>
        <label>
          <input
            type="radio"
            checked={multimediaType === "Upload"}
            onChange={() => setMultimediaType("Upload")}
          />
          Upload File
        </label>
      </div>
      {multimediaType === "YouTube" ? (
        <input
          type="url"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
          placeholder="Enter YouTube URL"
        />
      ) : (
        <input type="file" accept="video/*" onChange={handleFileChange} />
      )}
      <label>Assign To</label>
      <select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        required
      >
        <option value="">Select Employee</option>
        {employees.map((employee, index) => (
          <option key={index} value={employee}>
            {employee}
          </option>
        ))}
      </select>
      <button type="submit" disabled={!courseName || !courseDescription || !selectedEmployee}>
        Create & Assign Course
      </button>
      {videoPreviewUrl && (
        <div>
          <h3>Video Preview</h3>
          <video controls src={videoPreviewUrl} width="300" />
        </div>
      )}
    </form>
  );
}

export default CourseForm;

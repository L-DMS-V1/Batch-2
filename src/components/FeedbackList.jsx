import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedback Received</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>{feedback}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;

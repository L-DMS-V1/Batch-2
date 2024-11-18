import React, { useState } from "react";

const FeedbackForm = ({ feedbacks, setFeedbacks }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);
  const [submittedBy, setSubmittedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback && submittedBy) {
      setFeedbacks([
        ...feedbacks,
        {
          id: feedbacks.length + 1,
          feedback,
          rating,
          submittedBy,
        },
      ]);
      setFeedback("");
      setRating(1);
      setSubmittedBy("");
    }
  };

  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <div>
          <label>Rating (1-10):</label>
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Submitted By:</label>
          <input
            type="text"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,  // For Pie Chart
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";  // Import Pie chart
import "./App.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Register ArcElement for Pie Chart
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);
  const [submittedBy, setSubmittedBy] = useState("");

  // Handle feedback submission
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

  // Data for Bar Chart (Graph)
  const chartData = {
    labels: feedbacks.map((item) => `Feedback ${item.id}`),
    datasets: [
      {
        label: "Feedback Ratings",
        data: feedbacks.map((item) => item.rating),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Calculate Rating Distribution for Pie Chart
  const ratingDistribution = Array(10).fill(0);
  feedbacks.forEach((item) => {
    ratingDistribution[item.rating - 1] += 1;
  });

  const pieChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        data: ratingDistribution,
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F7464A",
          "#8E44AD", "#2ECC71", "#F39C12", "#E74C3C", "#3498DB",
        ],
        hoverBackgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F7464A",
          "#8E44AD", "#2ECC71", "#F39C12", "#E74C3C", "#3498DB",
        ],
      },
    ],
  };

  return (
    <div className="app-container">
      <h1>Feedback Collection and Reporting</h1>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Submit Feedback</h2>
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

      {/* Feedback List in Table */}
      {feedbacks.length > 0 && (
        <div className="feedback-list">
          <h2>Feedback Received</h2>
          <table>
            <thead>
              <tr>
                <th>Feedback ID</th>
                <th>Feedback</th>
                <th>Rating</th>
                <th>Submitted By</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.feedback}</td>
                  <td>{item.rating}</td>
                  <td>{item.submittedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Feedback Reports (Bar Chart) */}
      {feedbacks.length > 0 && (
        <div className="reports-section">
          <h2>Feedback Reports (Bar Chart)</h2>
          <Bar data={chartData} />
        </div>
      )}

      {/* Feedback Rating Distribution (Pie Chart) */}
      {feedbacks.length > 0 && (
        <div className="pie-chart-section">
          <h2>Feedback Rating Distribution (Pie Chart)</h2>
          <Pie data={pieChartData} />
        </div>
      )}
    </div>
  );
};

export default App;

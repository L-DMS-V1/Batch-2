import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Registering the components for charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Report = ({ feedbacks }) => {
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
    <div className="report-section">
      <h2>Feedback Reports (Bar Chart)</h2>
      {feedbacks.length > 0 ? (
        <>
          <Bar data={chartData} />
          <h2>Feedback Rating Distribution (Pie Chart)</h2>
          <Pie data={pieChartData} />
        </>
      ) : (
        <p>No feedback received yet!</p>
      )}
    </div>
  );
};

export default Report;

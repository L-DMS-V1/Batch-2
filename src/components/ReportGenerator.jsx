import React from "react";
import { Bar } from "react-chartjs-2";

const ReportGenerator = ({ reportData }) => {
  const chartData = {
    labels: reportData.map((item) => item.course),
    datasets: [
      {
        label: "Feedback Scores",
        data: reportData.map((item) => item.score),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2>Feedback Reports</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ReportGenerator;

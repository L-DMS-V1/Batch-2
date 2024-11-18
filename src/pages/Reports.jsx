import React from "react";
import ReportGenerator from "../components/ReportGenerator";

const Reports = () => {
  const mockReportData = [
    { course: "Course A", score: 8 },
    { course: "Course B", score: 6 },
    { course: "Course C", score: 9 },
  ];

  return <ReportGenerator reportData={mockReportData} />;
};

export default Reports;

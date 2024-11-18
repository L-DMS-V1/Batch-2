// src/components/ProgressChart.js

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { employeeProgressData } from "../data";

const ProgressChart = () => {
  // Aggregate data by employee for the chart
  const aggregateData = employeeProgressData.reduce((acc, { name, progress }) => {
    const found = acc.find((item) => item.name === name);
    if (found) {
      found.progress += progress;
      found.count += 1;
    } else {
      acc.push({ name, progress, count: 1 });
    }
    return acc;
  }, []).map((item) => ({
    name: item.name,
    averageProgress: item.progress / item.count,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={aggregateData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="averageProgress" fill="#8884d8" name="Average Progress" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProgressChart;

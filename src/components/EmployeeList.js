// src/components/EmployeeList.js

import React from "react";
import ProgressChart from "./ProgressChart";
import DetailedProgress from "./DetailedProgress";

const EmployeeList = () => {
  return (
    <div>
      <h2>All Employees' Progress</h2>
      <ProgressChart />
      <DetailedProgress />
    </div>
  );
};

export default EmployeeList;

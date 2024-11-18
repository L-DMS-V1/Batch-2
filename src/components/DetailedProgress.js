// src/components/DetailedProgress.js

import React from "react";
import { useTable } from "react-table";
import { employeeProgressData } from "../data";

const DetailedProgress = () => {
  const data = React.useMemo(() => employeeProgressData, []);
  
  const columns = React.useMemo(
    () => [
      { Header: "Employee Name", accessor: "name" },
      { Header: "Course Name", accessor: "course" },
      { Header: "Progress (%)", accessor: "progress" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DetailedProgress;

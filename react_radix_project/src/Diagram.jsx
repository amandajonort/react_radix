import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Diagram = () => {
  const data = [
    { month: "Jan", value: 5600 },
    { month: "Feb", value: 2000 },
    { month: "Mar", value: 1600 },
    { month: "Apr", value: 1700 },
    { month: "May", value: 4300 },
    { month: "Jun", value: 4600 },
    { month: "Jul", value: 2000 },
    { month: "Aug", value: 4500 },
    { month: "Sep", value: 3000 },
    { month: "Oct", value: 5000 },
    { month: "Nov", value: 5500 },
    { month: "Dec", value: 1600 },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#000000" />
    </BarChart>
  );
};

export default Diagram;

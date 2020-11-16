import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BurnDownDiagram() {
  const data = [
    {
      name: "19-10-01",
      Actual: 100,
      Estimated: 100
    },
    {
      name: "19-11-01",
      Actual: 90,
      Estimated: 87.5
    },
    {
      name: "19-12-01",
      Actual: 80,
      Estimated: 75
    },
    {
      name: "20-01-01",
      Actual: 60,
      Estimated: 62.5
    },
    {
      name: "20-02-01",
      Actual: 45,
      Estimated: 50
    },
    {
      name: "20-03-01",
      Actual: 40,
      Estimated: 37.5
    },
    {
      name: " 20-04-01",
      Actual: 30,
      Estimated: 25
    },
    {
      name: " 20-05-01",
      Actual: 10,
      Estimated: 12.5
    },
    {
      name: " 20-05-01",
      Actual: 0,
      Estimated: 0
    }
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={200}
        height={100}
        data={data}
        margin={{ top: 3, right: 3, left: -29, bottom: 3 }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Estimated"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Actual" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BurnDownDiagram;

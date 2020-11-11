import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

// import {
//     BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
//   } from 'recharts';



function DoubleCircleDiagram() {
  //  const windowWidth = window.innerWidth * 0.244;

  const value1 = Math.floor(Math.random() * 500);
  const value2 = Math.floor(Math.random() * 500);
  const value3 = Math.floor(Math.random() * 500);
  const value4 = Math.floor(Math.random() * 500);
  const value5 = Math.floor(Math.random() * 500);
  const value6 = Math.floor(Math.random() * 500);
  const value7 = Math.floor(Math.random() * 500);
  const value8 = Math.floor(Math.random() * 500);
  const value9 = Math.floor(Math.random() * 500);
  const value10 = Math.floor(Math.random() * 500);
  const value11 = Math.floor(Math.random() * 500);
  const value12 = Math.floor(Math.random() * 500);
  const value13 = Math.floor(Math.random() * 500);

//   useEffect(() => {
//      value1 = nodes[0].value13;
//      value2 = nodes[0].value13;
//      value3 = nodes[0].value13;
//      value4 = nodes[0].value13;
//      value5 = nodes[0].value13;
//      value6 = nodes[0].value13;
//      value7 = nodes[0].value13;
//      value8 = nodes[0].value13;
//      value9 = nodes[0].value13;
//      value10 = nodes[0].value13;
//      value11 = nodes[0].value13;
//      value12 = nodes[0].value13;
//      value13 = nodes[0].value13;
//   }, []);


//   console.log("values: " + value1);
//   console.log("values: " + value2);
//   console.log("values: " + value3);
//   console.log("values: " + value4);
//   console.log("values: " + value5);
//   console.log("values: " + value6);
//   console.log("values: " + value7);
//   console.log("values: " + value8);
//   console.log("values: " + value9);
//   console.log("values: " + value10);
//   console.log("values: " + value11);
//   console.log("values: " + value12);
//   console.log("values: " + value13);

  //   const value1 = 300;
  //   const value2 = 200;
  //   const value3 = 30;
  //   const value4 = 40;
  //   const value5 = 50;
  //   const value6 = 90;
  //   const value7 = 10;
  //   const value8 = 500;
  //   const value9 = 100;
  //   const value10 = 200;
  //   const value11 = 100;
  //   const value12 = 150;
  //   const value13 = 350;

  const data01 = [
    { name: "Group A", value: value1 + value2 },
    { name: "Group B", value: value3 + value4 + value5 + value6 + value7 },
    { name: "Group C", value: value8 + value9 },
    { name: "Group D", value: value10 + value11 },
    { name: "Group E", value: value12 + value13 },
  ];

  const data02 = [
    { name: "A1", value: value1 },
    { name: "A2", value: value2 },
    { name: "B1", value: value3 },
    { name: "B2", value: value4 },
    { name: "B3", value: value5 },
    { name: "B4", value: value6 },
    { name: "B5", value: value7 },
    { name: "C1", value: value8 },
    { name: "C2", value: value9 },
    { name: "D1", value: value10 },
    { name: "D2", value: value11 },
    { name: "E2", value: value12 },
    { name: "E1", value: value13 },
  ];

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];



  return (
    <PieChart
    width={300}
    height={250}>
      <Tooltip />
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={40}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
//     <BarChart width={150} height={40} data={data}>
//     <Bar dataKey="uv" fill="#8884d8" />
//   </BarChart>
  );
}

export default DoubleCircleDiagram;

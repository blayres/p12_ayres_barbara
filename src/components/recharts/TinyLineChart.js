import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'L',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'M',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'M',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'J',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'V',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'S',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'D',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

export default function TinyLineChart(props) {

  const dataChart = [];
  const days = ["L", "M", "M", "J", "V", "S", "D"]
  console.log(props.data)
  props.data.map((donne) => {
    const donneFormated = {
      day: days[donne.day - 1],
      sessionLength : donne.sessionLength
    }

    dataChart.push(donneFormated)
  })

    return (
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart width={300} height={80} margin={{top: 20}} data={dataChart}>
        <Legend layout="horizontal" verticalAlign="top" align="left" iconSize={0} width={147} height={48} opacity={0.5} />
        <Line name='Durée moyenne des sessions' type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} />
        <XAxis axisLine={false} tickLine={false} dataKey="day" style={{ fill: "#FFFFFF", fontSize: 12}} />

        </LineChart>
      </ResponsiveContainer>
    );
  }

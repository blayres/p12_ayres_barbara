import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     subject: 'Math',
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: 'Chinese',
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'English',
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Geography',
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: 'Physics',
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: 'History',
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ];

export default function SimpleRadarChart(props) {

  console.log(props.data)

  const kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
  const dataChart = [];
  props.data.data.map((donne, index) => {
    const donneFormated = {
      subject: kind[donne.kind - 1],
      value: donne.value,
      kind: donne.kind,
    }

    dataChart.push(donneFormated)
  })


    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={dataChart}>
          <PolarGrid  />
          <PolarAngleAxis dataKey="subject" tick={{fill: "#FFFFFF", fontSize: 12}} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

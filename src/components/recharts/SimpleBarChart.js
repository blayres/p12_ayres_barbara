import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Surface, Label } from 'recharts';


export default function SimpleBarChart(props) {
  const dataChart = [];
  props.data.map((donne, index) => {
    const donneFormated = {
      name: index +1,
      Calories: donne.calories,
      Poids: donne.kilogram,
    }

    dataChart.push(donneFormated)
  })

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical="" />
          <XAxis dataKey="name" tickLine={false} >
             <Label value="Activité quotidienne" offset={250} position="top" />
          </XAxis>
          <YAxis axisLine={false} tickLine={false} orientation="right" />
          <Tooltip /> 
          <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: 64 }} iconType="circle" iconSize={8} />
          <Surface width={8} height={8} radius={[0]} />
          <Bar dataKey="Calories" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10} />
          <Bar dataKey="Poids" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }


  // tooltip: contentStyle={{ backgroundColor: "#E60000", color: "#FFFFFF" }} 
  

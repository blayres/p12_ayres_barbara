import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Surface, Label } from 'recharts';
import { FormatSimpleBarChart } from '../../formatter/FormatSimpleBarChart';
import PropTypes from 'prop-types';


/**
 * This function shows the user's activity day by day with kilograms and calories on a graphic.
 * @param {array} data Kilograms and calories
 * @return {chart}       Chart with the final result in bar
 */

function SimpleBarChart({data}) {
  const [dataChart, setDataChart] = useState([])

      useEffect(() => {
        async function init() {
            const dataChart = await FormatSimpleBarChart(data)
            setDataChart(dataChart)
        }
        init();

    }, [data]);

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

  SimpleBarChart.propTypes = {
    data: PropTypes.array
  }

  export default SimpleBarChart;

  
  

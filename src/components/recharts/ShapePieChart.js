import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis, Area } from 'recharts';
import PropTypes from 'prop-types';



/**
 * This function shows the user's score (in percentage) on a graphic
 * @param {number} score Score in decimal number
 * @return {chart}       Chart with the final result in percentage
 */
function ShapePieChart({score}) {
 
  const data = [
    { name: 'L1', value: score * 100 }
  ];
  
  const circleSize = 260;


    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={100}
          outerRadius={100}
          barSize={12}
          data={data}
          startAngle={-130}
          endAngle={-490}
          >
          <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
          />
          <Area stroke="#8884d8" fill='#FFFFFF' />
          <RadialBar
          clockWise
          dataKey="value"
          cornerRadius={circleSize / 2}
          fill="#E60000"
          />
          <text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          >
          {score * 100}% de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }

  ShapePieChart.propTypes = {
    score: PropTypes.number
  }

  export default ShapePieChart;

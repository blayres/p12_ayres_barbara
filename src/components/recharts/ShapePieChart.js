import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

function ShapePieChart({ score }) {
  const data = [{ name: 'L1', value: score * 100 }];

  const circleSize = 260;
  const barSize = 20; 

  return (
    <div style={{ position: 'relative', width: circleSize, height: circleSize }}>
      <RadialBarChart
        width={circleSize}
        height={circleSize}
        cx={circleSize / 2}
        cy={circleSize / 2}
        innerRadius={100}
        outerRadius={100}
        barSize={barSize} 
        data={data}
        startAngle={-130}
        endAngle={50} 
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          clockWise
          dataKey="value"
          cornerRadius={5} 
          fill="#E60000"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={100}
          fill="#FFFFFF"
          style={{ borderRadius: '5px' }} 
        /> 
        <text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          <tspan x={circleSize / 2} dy={-20} textAnchor="middle" fontWeight="bold" fontSize="22px">
            {`${score * 100}%`}
          </tspan>
          <tspan x={circleSize / 2} dy={26} textAnchor="middle" fill="#888">
            de votre
          </tspan>
          <tspan x={circleSize / 2} dy={26} textAnchor="middle" fill="#888">
            objectif
          </tspan>
        </text>
      </RadialBarChart>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '16px',
        }}
      >
        Score
      </div>
    </div>
  );
}

ShapePieChart.propTypes = {
  score: PropTypes.number,
};

export default ShapePieChart;

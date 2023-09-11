import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { FormatSimpleRadarChart } from '../../formatter/FormatSimpleRadarChart';
import PropTypes from 'prop-types';

function SimpleRadarChart({ data }) {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    async function init() {
      const dataChart = await FormatSimpleRadarChart(data);
      setDataChart(dataChart);
    }
    init();
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={dataChart}>
        <PolarGrid gridType="polygon" />
        <style>
          {`
            .recharts-polar-grid-angle line {
              display: none;
            }
          `}
        </style>

        <PolarAngleAxis dataKey="subject" tick={{ fill: "#FFFFFF", fontSize: 12 }} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

SimpleRadarChart.propTypes = {
  data: PropTypes.object,
};

export default SimpleRadarChart;




import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { FormatTinyLineChart } from '../../formatter/FormatTinyLineChart';
import PropTypes from 'prop-types';

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value;
    return (
      <div className="custom-tooltip">
        <div className="tooltip-content">
          {`${sessionLength} min`}
        </div>
      </div>
    );
  }

  return null;
}

function TinyLineChart({ data }) {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    async function init() {
      const dataChart = await FormatTinyLineChart(data);
      setDataChart(dataChart);
    }
    init();
  }, [data]);

  const xMin = 0;
  const xMax = dataChart.length - 1;

  const xDomain = [xMin, xMax];

  return (
    <div style={{ position: 'relative' }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dataChart} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="day"
            style={{ fill: '#FFFFFF', fontSize: 12, textAlign: 'center' }}
            domain={xDomain}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[28, 58]}
            axisLine={false}
            tickLine={false}
            label={false}
            width={0}
            tick={{ fill: 'transparent' }}
          />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth={2}
            dot={false}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          fontSize: '15px',
          lineHeight: '24px',
          color: '#FFFFFF',
        }}
      >
        Durée moyenne des sessions
      </div>
      <style>
        {`
          .custom-tooltip {
            background-color: #FFF;
            padding: 5px;
          }

          .tooltip-content {
            color: #000;
            font-weight: 500;
            font-size: 8px;
          }
        `}
      </style>
    </div>
  );
}

TinyLineChart.propTypes = {
  data: PropTypes.array,
};

export default TinyLineChart;









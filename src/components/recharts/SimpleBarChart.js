import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Surface,
} from "recharts";
import { FormatSimpleBarChart } from "../../formatter/FormatSimpleBarChart";
import PropTypes from "prop-types";

function SimpleBarChart({ data }) {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    async function init() {
      const dataChart = await FormatSimpleBarChart(data);
      setDataChart(dataChart);
    }
    init();
  }, [data]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const poids = payload.find((entry) => entry.dataKey === "Poids");
      const calories = payload.find((entry) => entry.dataKey === "Calories");

      const tooltipStyle = {
        backgroundColor: "#E60000",
        color: "white",
        fontSize: "10px",
        lineHeight: "24px",
        textAlign: "center",
      };

      return (
        <div className="custom-tooltip" style={tooltipStyle}>
          {poids && <p>{`${poids.value} kg`}</p>}
          {calories && <p>{`${calories.value} kCal`}</p>}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <span
          style={{
            position: "absolute",
            left: "80px",
            top: "22px",
            transform: "translateX(-50%)",
            fontSize: "14px",
          }}
        >
          Activité quotidienne
        </span>
      </div>
      <ResponsiveContainer width="100%" height={320}>
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
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickLine={false} orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ paddingBottom: 64 }}
            iconType="circle"
            iconSize={8}
          />
          <Surface width={8} height={8} radius={[0]} />
          <Bar
            dataKey="Poids"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={10}
            name={<span style={{ color: "#666" }}>Poids (kg)</span>}
          />
          <Bar
            dataKey="Calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={10}
            name={
              <span style={{ color: "#666" }}>Calories brûlées (kCal)</span>
            }
          />
        </BarChart>
      </ResponsiveContainer>
      <style>
        {`
          .recharts-legend-item-text {
            margin-left: 10px;
            margin-right: 10px;
          }
        `}
      </style>
    </div>
  );
}

SimpleBarChart.propTypes = {
  data: PropTypes.array,
};

export default SimpleBarChart;

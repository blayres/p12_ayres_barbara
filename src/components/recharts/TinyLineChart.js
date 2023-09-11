import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FormatTinyLineChart } from "../../formatter/FormatTinyLineChart";
import PropTypes from "prop-types";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value;
    return (
      <div className="custom-tooltip">
        <div className="tooltip-content">{`${sessionLength} min`}</div>
      </div>
    );
  }

  return null;
}

function CustomCursor(props) {
  const { width, height, strokeWidth, cursorX } = props;

  return (
    <svg width={width} height={height}>
      <line
        x1={cursorX}
        y1="0"
        x2={cursorX}
        y2={height}
        strokeWidth={strokeWidth}
        stroke="rgba(0, 0, 0, 0.09)"
      />
    </svg>
  );
}

function TinyLineChart({ data }) {
  const [dataChart, setDataChart] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorX, setCursorX] = useState(null);
  const chartBackground = isHovered ? "red" : "transparent";

  useEffect(() => {
    async function init() {
      const dataChart = await FormatTinyLineChart(data);
      setDataChart(dataChart);
    }
    init();
  }, [data]);

  const extraCategories = [
    "Inicio",
    ...dataChart.map((item) => item.day),
    "Fim",
  ];
  const xMin = 0;
  const xMax = extraCategories.length - 1;
  const xDomain = [xMin, xMax];

  const handleMouseMove = (e) => {
    if (e.activePayload && e.activePayload[0]) {
      setCursorX(e.activePayload[0].payload.cx);
    }
  };

  const handleMouseLeave = () => {
    setCursorX(null);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={dataChart}
          margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <XAxis
            dataKey="day"
            style={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontSize: 12,
              textAlign: "center",
            }}
            domain={xDomain}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis
            domain={[25, 62]}
            axisLine={false}
            tickLine={false}
            label={false}
            width={0}
            tick={{ fill: "transparent" }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            strokeWidth={2}
            dot={false}
            stroke="url(#gradient)"
            tension={0.2}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopOpacity: 0.4, stopColor: "#FFF" }}
              />
              <stop
                offset="100%"
                style={{ stopOpacity: 1, stopColor: "#FFF" }}
              />
            </linearGradient>
          </defs>
          <Tooltip
            content={<CustomTooltip />}
            cursor={
              <CustomCursor
                width={79}
                height={263}
                strokeWidth={79}
                cursorX={cursorX}
              />
            }
            wrapperStyle={{
              backgroundColor: chartBackground,
              opacity: isHovered ? "0.09" : "1",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          fontSize: "15px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        Durée moyenne des
        <br /> sessions
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

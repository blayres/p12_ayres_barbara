import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {FormatTinyLineChart} from '../../formatter/FormatTinyLineChart';
import PropTypes from 'prop-types';

/**
 * This function shows the average sessions of a user per day on a graphic
 * @param {array} data   Average sessions (time and day)
 * @return {chart}       Chart with the final result
 */
function TinyLineChart({data}) {

  const [dataChart, setDataChart] = useState([])

  useEffect(() => {
    async function init() {
        const dataChart = await FormatTinyLineChart(data)
        setDataChart(dataChart)
    }
    init();

}, [data]);


    return (
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart width={300} height={80} margin={{top: 20}} data={dataChart}>
        <Legend layout="horizontal" verticalAlign="top" align="left" iconSize={0} width={147} height={48} opacity={0.5} />
        <Line name='Durée moyenne des sessions' type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} />
        <XAxis axisLine={false} tickLine={false} dataKey="day" style={{ fill: "#FFFFFF", fontSize: 12, width: 20}} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  TinyLineChart.propTypes = {
    data: PropTypes.array
  }

  export default TinyLineChart;
import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'dhaka',
            uv: 400,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'chitagong',
            uv: 400,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'khulna',
            uv: 400, 
            pv: 2400,
            amt: 2400
        },
        {
            name: 'rajshai',
            uv: 400,
            pv: 2400,
            amt: 2400
        },
    ];
    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
      </LineChart>
    );
};

export default Chart;
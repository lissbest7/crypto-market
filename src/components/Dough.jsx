import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Bitcoin (BTC)', value: 500 },
  { name: 'Ethereum (ETH)', value: 300 },
  { name: 'Ripple (XRP)', value: 200 },
  { name: 'Litecoin (LTC)', value: 100 },
];

const COLORS = ['#FFD700', '#3C3C3D', '#4B4F54', '#A3A3A3'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55; 
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

const Legend = () => (
  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
    {data.map((entry, index) => (
      <div key={entry.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: COLORS[index], marginRight: '5px' }} />
        <span>{entry.name}</span>
      </div>
    ))}
  </div>
);

export default class CryptoPieChart extends PureComponent {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
          <ResponsiveContainer width="65%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={110}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Legend /> 
        </div>
      </div>
    );
  }
}

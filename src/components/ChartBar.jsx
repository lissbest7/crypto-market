import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Bitcoin (BTC)',
    tradingVolume: 25000000000,
    marketCap: 450000000,
    price: 23000,
  },
  {
    name: 'Ethereum (ETH)',
    tradingVolume: 15000000000,
    marketCap: 200000000,
    price: 1600,
  },
  {
    name: 'XRP',
    tradingVolume: 5000000000,
    marketCap: 25000000,
    price: 0.5,
  },
  {
    name: 'Litecoin (LTC)',
    tradingVolume: 2000000000,
    marketCap: 7000000,
    price: 100,
  },
  {
    name: 'Cardano (ADA)',
    tradingVolume: 1000000000,
    marketCap: 10000000,
    price: 0.3,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-double-yaxis-39dhps';

  render() {
    return (
      <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 50,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="marketCap" fill="#8884d8" name="Market Cap (in USD)" />
            <Bar yAxisId="right" dataKey="price" fill="#82ca9d" name="Price (in USD)" />
            <Bar yAxisId="left" dataKey="tradingVolume" fill="#ffc658" name="Trading Volume (in USD)" />
          </BarChart>
        </ResponsiveContainer>
    );
  }
}

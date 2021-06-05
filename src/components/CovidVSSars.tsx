import styled from 'styled-components'

import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'A',
    uv: 1000,
    pv: 2000
  },
  {
    name: 'B',
    uv: 2000,
    pv: 3000
  },
  {
    name: 'C',
    uv: 3000,
    pv: 4000
  }
]

export default function CovidVsSars () {
  return (
    <Container>
      <div className="title">
        <h4>Coronavírus VS Sars</h4>
        <p>casos diários e taxa de mortalidade</p>
      </div>
      <div className="contentCovidVsSars">
        <AreaChart width={300} height={250} className="chart" data={data} margin={{ top: 10, right: 0, left: 20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F9345E" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F9345E" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6236FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6236FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: var(--color-white);
  border-radius: 20px;
  color: var(--color-dark-blue);
  padding: 20px 0 40px;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 15px;
      color: var(--color-gray-dark);
    }

    h4 {
      font-size: 18px;
    }
  }

  .contentCovidVsSars {}
`

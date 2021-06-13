import styled from 'styled-components'

import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Day 01',
    covid: 1,
    sars: 1
  },
  {
    name: 'Day 91',
    covid: 2000,
    sars: 3000
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
        <AreaChart
          data={data}
          width={300}
          height={250}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="colorCovid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F9345E" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F9345E" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSars" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6236FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6236FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="covid" stroke="#F9345E" fillOpacity={1} fill="url(#colorCovid)" />
          <Area type="monotone" dataKey="sars" stroke="#6236FF" fillOpacity={1} fill="url(#colorSars)" />
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

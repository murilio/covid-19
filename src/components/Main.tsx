import styled from 'styled-components'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import DataList from './DataList'
import GeoChart from './GeoChart'

const myData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300
  }
]

export default function Main () {
  return (
    <Container>
      <DataList />
      <div className="containerMain">
        <GeoChart />
        <LineChart width={350} height={250} data={myData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </Container>
  )
}

export const Container = styled.section`
  background-color: var(--color-white);
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .containerMain {
    display: flex;
    flex-direction: column;

    overflow-y: auto;

    ::-webkit-scrollbar {
      height: 0;
    }
  }
`

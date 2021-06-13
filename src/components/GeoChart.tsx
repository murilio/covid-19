import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Chart from 'react-google-charts'

import { api } from '../services/api'

const mapsApiKey = process.env.MAPSAPIKEY

export default function GeoChart () {
  const [data, setData] = useState([])

  async function loadCases () {
    const res = await api.get('/cases')
    setData(res.data)
  }

  useEffect(() => {
    loadCases()
  }, [])

  const myData = [
    ['Country', 'Casos']
  ]

  Object
    .entries(data)
    .map((item) => myData.push([item[0], item[1].All.deaths]))

  return (
    <Container>
      <Chart
        chartType="GeoChart"
        height="300px"
        // data={myData}
        data={[
          ['Country', 'População'],
          ['France', 65700000],
          ['Germany', 81890000],
          ['Poland', 38540000],
          ['Brazil', 2761477],
          ['US', 1324110]
          // ['Naples', 959574]
        ]}
        options={{
          backgroundColor: '#F1F3FB',
          colors: ['#FA6400', '#F9345E']
        }}
        mapsApiKey={mapsApiKey}
        rootProps={{ 'data-testid': '4' }}
      />
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--color-gray);
  padding: 20px;
  border-radius: 20px;

  @media only screen and (min-width: 1024px) {
    max-height: 400px;
    height: 100%;
  }
`

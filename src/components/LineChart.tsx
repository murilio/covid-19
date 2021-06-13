import { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

import { api } from '../services/api'

interface Cases {
  population: number
  confirmed: number
  recovered: number
  deaths: number
}

interface All {
  All: Cases
}

export default function LineChart () {
  const [data, setData] = useState<Cases>()

  async function loadCases () {
    const { data } = await api.get<All>('/cases?country=Global')
    setData(data.All)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Chart
      chartType="LineChart"
      height="300px"
      loader={<span>Loading Chart</span>}
      data={[
        ['x', 'Casos confirmados', 'Recuperados', 'Mortes'],
        ['2020', 0, 0, 0],
        [
          '2021',
          data?.confirmed,
          data?.recovered,
          data?.deaths
        ]
      ]}
      options={{
        is3D: true,
        colors: ['#F9345E', '#1CB142', '#6236FF'],
        backgroundColor: '#fff',
        curveType: 'function',
        legend: { position: 'top' }
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

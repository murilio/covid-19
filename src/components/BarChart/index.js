import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

// styles
import { Container } from './styles'

// services
import api from '../../services/api'

export default function BarChart () {
  const [cases, setCases] = useState({})

  async function loadCases () {
    const res = await api.get('/cases?country=Brazil')
    setCases(res.data.All)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Container>
      <h1>Cases in brazil</h1>
      <Pie
        data={{
          labels: [
            'Confirmed',
            'Recovered',
            'Deaths'
          ],
          datasets: [{
            data: [`${cases.confirmed}`, `${cases.recovered}`, `${cases.deaths}`],
            backgroundColor: ['#ff6c00', '#0bd67a', '#d43b45']
          }]
        }}
      />
      <p>author: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/murilio">Murilio</a></p>
    </Container>
  )
}

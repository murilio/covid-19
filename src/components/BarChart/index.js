import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'

// styles
import { Container } from './styles'

// services
import { api } from '../../services/api'

export default function BarChart () {
  const [country, setCase] = useState({})
  const [vaccines, setVaccine] = useState({})

  const { search } = useParams()

  async function loadCases () {
    const res = await api.get(`/cases?country=${search}`)
    setCase(res.data.All ? res.data.All : '')
  }

  async function loadVaccines () {
    const res = await api.get(`/vaccines/?country=${search}`)
    setVaccine(res.data.All ? res.data.All : '')
  }

  useEffect(() => {
    loadCases()
    loadVaccines()
  }, [search])

  return (
    <Container id="content">
      <h1>Avanço dos casos: {search}</h1>
      <div className="chart">
        <Doughnut
          data={{
            labels: [
              'Confirmados',
              'Recuperados',
              'Mortes'
            ],
            datasets: [{
              data: [
                country.confirmed ? country.confirmed : 0,
                country.recovered ? country.recovered : 0,
                country.deaths ? country.deaths : 0
              ],
              backgroundColor: [
                '#e58e26',
                '#78e08f',
                '#2c3e50'
              ]
            }]
          }}
        />
        <Bar
          data={{
            labels: [
              `População ${vaccines.population ? vaccines.population.toLocaleString('pt-BR') : 0}`,
              `População vacinada ${vaccines.people_vaccinated ? vaccines.people_vaccinated.toLocaleString('pt-BR') : 0}`,
              `População parcialmente vacinada ${vaccines.people_partially_vaccinated ? vaccines.people_partially_vaccinated.toLocaleString('pt-BR') : 0}`
            ],
            datasets: [{
              label: 'vacinação',
              data: [
                vaccines.population ? vaccines.population : 0,
                vaccines.people_vaccinated ? vaccines.people_vaccinated : 0,
                vaccines.people_partially_vaccinated ? vaccines.people_partially_vaccinated : 0
              ],
              backgroundColor: [
                '#60a3bc',
                '#78e08f',
                '#e58e26'
              ]
            }]
          }}
        />
      </div>
      <p>author: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/murilio">Murilio</a></p>
    </Container>
  )
}

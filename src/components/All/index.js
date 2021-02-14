import React, { useState, useEffect } from 'react'

// styles
import { Container, IconGlobal, IconUser, IconFocus, IconEscudo } from './styles'

// services
import api from '../../services/api'

export default function All () {
  const [cases, setCases] = useState({})

  async function loadCases () {
    const res = await api.get('/cases?country=Global')
    setCases(res.data)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <>
      {Object.values(cases).map((item, index) => (
        <Container key={index}>
          <div className="card">
            <IconGlobal />
            <span>Population</span>
            <p>{item.population.toLocaleString('pt-BR')}</p>
          </div>
          <div className="card">
            <IconUser />
            <span>Deaths</span>
            <p>{item.deaths.toLocaleString('pt-BR')}</p>
          </div>
          <div className="card">
            <IconFocus />
            <span>Confirmed</span>
            <p>{item.confirmed.toLocaleString('pt-BR')}</p>
          </div>
          <div className="card">
            <IconEscudo />
            <span>Recovered cases</span>
            <p>{item.recovered.toLocaleString('pt-BR')}</p>
          </div>
        </Container>
      ))}
    </>
  )
}

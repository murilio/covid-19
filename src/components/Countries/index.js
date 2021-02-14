import React, { useState, useEffect } from 'react'

// styles
import { Container } from './styles'

// services
import api from '../../services/api'

export default function Countries () {
  const [cases, setCases] = useState({})

  async function loadCases () {
    const res = await api.get('/cases')
    setCases(res.data)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Container>
      <h4>Countries</h4>
      {Object.values(cases)
        .sort((a, b) => (a.All.confirmed > b.All.confirmed) ? -1 : 1)
        .map((item, index) => (
          <div key={index} className={`item item${index}`}>
            <img src={`${item.All.abbreviation ? `https://disease.sh/assets/img/flags/${item.All.abbreviation.toLowerCase()}.png` : 'https://disease.sh/assets/img/virus.png'}`} alt=""/>
            <p>
              <span>{item.All.country ? item.All.country : 'undefined'}</span>
              <span>{item.All.confirmed.toLocaleString('pt-BR')}</span>
            </p>
          </div>
        ))}
    </Container>
  )
}

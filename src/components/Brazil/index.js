import { useState, useEffect } from 'react'

// styles
import { Container } from './styles'

// services
import api from '../../services/api'

export default function Countries () {
  const [cases, setCases] = useState({})

  async function loadCases () {
    const res = await api.get('/cases?country=Brazil')
    setCases(res.data)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Container>
      <h4>Casos confirmados no Brasil</h4>
      {Object.entries(cases)
        .sort((a, b) => (a[1].confirmed > b[1].confirmed) ? -1 : 1)
        .map((item, index) => (
          <div key={index} className={`item item${index}`}>
            <p>
              <span>{item[0] ? item[0] : 'undefined'}</span>
              <span>{item[1].confirmed.toLocaleString('pt-BR')}</span>
            </p>
          </div>
        ))}
    </Container>
  )
}

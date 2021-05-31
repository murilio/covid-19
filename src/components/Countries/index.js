import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// styles
import { Container, ViewButton } from './styles'

// services
import api from '../../services/api'

export default function Countries () {
  const [cases, setCases] = useState([])

  async function loadCases () {
    const res = await api.get('/cases')
    setCases(res.data)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Container>
      <h4>Países</h4>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th></th>
            <th>País</th>
            <th>Casos confirmados</th>
            <th>Casos recuperados</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(cases)
          .sort((a, b) => (a[1].All.confirmed > b[1].All.confirmed) ? -1 : 1)
          .map((item, index) => (
            <tr key={index} className={`item item${index}`}>
              <td><img src={`${item[1].All.abbreviation ? `https://disease.sh/assets/img/flags/${item[1].All.abbreviation.toLowerCase()}.png` : 'https://disease.sh/assets/img/virus.png'}`} alt={item[0]} /></td>
              <td>{item[0]}</td>
              <td>{item[1].All.confirmed.toLocaleString('pt-BR')}</td>
              <td>{item[1].All.recovered ? item[1].All.recovered.toLocaleString('pt-BR') : 'Não informado'}</td>
              <td title="Ver gráficos">
                <Link to={`/${item[0]}#t`}>
                  <ViewButton />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

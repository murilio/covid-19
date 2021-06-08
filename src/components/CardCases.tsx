import { useEffect, useState } from 'react'
import styled from 'styled-components'

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

export default function CardCases () {
  const [cases, setCases] = useState<Cases>()

  async function loadCases () {
    const { data } = await api.get<All>('/cases?country=Global')
    setCases(data.All)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Container>
      <div className="dados">
        <p>População</p>
        <span className="value">{cases?.population.toLocaleString('pt-BR')}</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>

      <div className="dados">
        <p>Confirmados</p>
        <span className="value">{cases?.confirmed.toLocaleString('pt-BR')}</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>

      <div className="dados">
        <p>Recuperados</p>
        <span className="value">{cases?.recovered.toLocaleString('pt-BR')}</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>

      <div className="dados">
        <p>Mortes</p>
        <span className="value">{cases?.deaths.toLocaleString('pt-BR')}</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>
    </Container>
  )
}

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }

  .dados {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    box-shadow: 0 0 10px 0 #ddd;
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--color-white);

    :nth-child(1) {
      .value {
        color: var(--color-red)
      }
    }

    :nth-child(2) {
      .value {
        color: var(--color-orange)
      }
    }

    :nth-child(3) {
      .value {
        color: var(--color-green)
      }
    }

    :nth-child(4) {
      .value {
        color: var(--color-purple)
      }
    }

    p {
      font-weight: 600;
      font-size: 14px;
    }

    .value {
      font-size: 22px;
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;

      font-size: 12px;

      .icon {
        font-size: 18px;
        color: var(--color-green);
      }
    }
  }
`

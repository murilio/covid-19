import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { api } from '../services/api'

export default function DataList () {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  async function loadCases () {
    const res = await api.get('/cases')
    setData(res.data)
  }

  useEffect(() => {
    loadCases()
  }, [])

  return (
    <Container>
      <div className="search">
        <label htmlFor="country">
          <span className="material-icons-outlined">search</span>
        </label>
        <input
          id="country"
          name="country"
          list="countries"
          autoComplete="off"
          placeholder="Procurar cidade"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div id="countries" className="countries">
        {Object.entries(data)
          .filter((item) => search === '' ? item : item[0].toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => (a[1].All.confirmed > b[1].All.confirmed) ? -1 : 1)
          .map((item, index) => (
            <p key={index}>{item[1].All.confirmed.toLocaleString('pt-BR')} <span>{item[0]}</span></p>
          ))}
      </div>
    </Container >
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  @media only screen and (min-width: 1024px) {
    max-width: 200px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 300px;
  }

  .search {
    position: relative;

    > label {
      cursor: pointer;

      span {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 20px;
      }
    }

    input {
      width: 100%;
      border-radius: 20px;
      min-height: 40px;
      border: 0;
      background-color: var(--color-gray);
      padding: 0 10px 0 40px;
      color: var(--color-gray-dark);

      ::placeholder {
        font-size: 12px;
        color: var(--color-gray-dark);
      }
    }
  }

  .countries {
    display: flex;
    flex-direction: column;
    gap: 10px;

    height: 300px;
    overflow: auto;
    padding: 0 0 0 15px;

    @media only screen and (min-width: 1024px) {
      height: 800px;
    }


    ::-webkit-scrollbar-track {
      background-color: var(--color-gray);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-gray-dark);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-purple);
    }

    p {
      display: flex;
      align-items: center;
      gap: 10px;

      cursor: pointer;
      min-height: 30px;
      font-weight: 600;
      font-size: 15px;
      color: var(--color-blue-dark);

      &:first-child {
        display: none;
      }

      span {
        font-weight: 500;
        font-size: 12px;
        color: var(--color-gray-dark);
      }
    }
  }
`

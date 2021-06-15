import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { api } from '../services/api'

export default function DataList () {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  async function loadCases () {
    const { data } = await api.get('/cases')
    setData(data)
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
          placeholder="Procurar país"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div id="countries" className="countries">
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Casos</th>
              <th>Países</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data)
              .sort((a, b) => (a[1].All.confirmed > b[1].All.confirmed) ? -1 : 1)
              .filter((item) => search === '' ? item : item[0].toLowerCase().includes(search.toLowerCase()))
              .map((item, index) => (
                <tr key={index}>
                  <td><img src={`${item[1].All.abbreviation ? `https://disease.sh/assets/img/flags/${item[1].All.abbreviation.toLowerCase()}.png` : 'https://disease.sh/assets/img/virus.png'}`} alt={item[0]} /></td>
                  <td className="cases">{item[1].All.confirmed.toLocaleString('pt-BR')}</td>
                  <td>{item[0]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Container >
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

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

    @media only screen and (min-width: 1024px) {
      height: 750px;
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

    table {
      width: 100%;

      thead {
        position: sticky;
        top: 0;
        background-color: var(--color-white);
      }

      tbody, tr {
        .cases {
          color: var(--color-orange);
          font-weight: 600;
        }

        td {
          font-size: 15px;

          img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            object-fit: cover;
          }
        }
      }

      th, td {
        padding: 8px 10px;
        border-bottom: 1px solid #eee;

        &:nth-child(4) {
          display: none;

          @media (min-width: 1024px) {
            display: table-cell;
          }
        }
      }

      th {
        text-align: left;
      }
    }
  }
`

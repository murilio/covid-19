import { useState } from 'react'
import styled from 'styled-components'

const data = [{
  country: 'Brazil',
  cases: 312332
}, {
  country: 'United States',
  cases: 3123
}]

export default function DataList () {
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(search)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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

        {/* <datalist id="countries">
          <option value="Edge">Edge</option>
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist> */}

        <div id="countries" className="countries">
          {data.map(({ cases, country }, index) => (
            <p key={index}>{cases.toLocaleString('pt-BR')} <span>{country}</span></p>
          ))}
        </div>
      </form>
    </Container >
  )
}

export const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    max-width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

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

      height: 100%;
      max-height: 200px;
      overflow: auto;
      padding: 0 0 0 15px;

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

        span {
          font-weight: 500;
          font-size: 12px;
          color: var(--color-gray-dark);
        }
      }
    }
  }
`

import styled from 'styled-components'

export default function CardCases () {
  return (
    <Container>
      <div className="dados">
        <p>Casos confirmados</p>
        <span className="value">273,972</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>

      <div className="dados">
        <p>Casos confirmados</p>
        <span className="value">273,972</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>

      <div className="dados">
        <p>Casos confirmados</p>
        <span className="value">273,972</span>
        <span>23% <span className="material-icons-outlined icon">arrow_drop_down</span></span>
      </div>

      <div className="dados">
        <p>Casos confirmados</p>
        <span className="value">273,972</span>
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

  @media only screen and (min-width: 1120px) {
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

import styled from 'styled-components'

export default function Symptoms () {
  return (
    <Container>
      <a href="/symptoms">
        <img src="/doctor.svg" alt="" />
        <div className="contentSymptoms">
          <div className="text">
            <h3>Sintomas </h3>
            <p>Leia atentamente os sintomas do covid-19</p>
          </div>
          <div className="icon">
            <span className="material-icons-outlined">east</span>
          </div>
        </div>
      </a>
    </Container>
  )
}

export const Container = styled.div`
  background-color: var(--color-purple);
  border-radius: 20px;
  margin: 60px 0 0 0;

  @media only screen and (min-width: 768px) {
    margin: 83px 0 0 0;
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 15px;

    color: var(--color-white);
    padding: 10px 20px;

    img {
      margin: -50px 0 0 -20px;
    }

    .contentSymptoms {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .text {
        display: flex;
        flex-direction: column;
        gap: 5px;

        h3 {
          font-size: 22px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`

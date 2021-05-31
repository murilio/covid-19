import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 50px;

  > .chart {
    display: grid;
    grid-template-columns: 1fr;
    gap: 100px;

    @media (min-width: 768px) {
      canvas {
        max-height: 500px;
        max-width: 500px;
      }
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  h1 {
    margin-bottom: 20px;
    font-size: 35px;
  }

  p {
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column!important;
  }
`

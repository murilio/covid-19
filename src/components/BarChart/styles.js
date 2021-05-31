import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 50px;

  > .chart {
    display: flex;
    flex-direction: column;
    gap: 100px;

    canvas + canvas {
      min-height: 260px;
    }

    @media (min-width: 768px) {
      flex-direction: row;

      canvas {
        max-height: 400px;
        max-width: 400px;
      }
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

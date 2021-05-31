import styled from 'styled-components'

// components
import AllCases from '../components/All'
import Countries from '../components/Countries'
import BarChart from '../components/BarChart'

export default function Home () {
  return (
    <Container>
      <h1>Covid-19 em tempo real</h1>
      <section>
        <AllCases />
        <Countries />
      </section>
      <BarChart />
    </Container>
  )
}

export const Container = styled.section`
  background-color: #f5f6fa;
  min-height: 100vh;
  padding: 2%;

  > h1 {
    margin: 0 0 20px 0;
    line-height: 1;
  }

  > section {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 30px;
    }
  }

`

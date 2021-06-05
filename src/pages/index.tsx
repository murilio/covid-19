import styled from 'styled-components'
import Data from '../components/Data'

import Header from '../components/Header'
import LastNews from '../components/LastNews'

export default function Home () {
  return (
    <Container>
      <div className="containerHome">
        <Header />
        <Data />
      </div>
      <LastNews />
    </Container>
  )
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 20px 4%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .containerHome {
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 100%;

    @media only screen and (min-width: 768px) {
      width: calc(100% - 400px);
    }
  }

`

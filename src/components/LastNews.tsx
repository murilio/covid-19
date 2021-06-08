import styled from 'styled-components'
import CovidVsSars from './CovidVSSars'

import Symptoms from './Symptoms'
import UpdateNotice from './UpdateNotice'

export default function LastNews () {
  return (
    <Container>
      <Symptoms />
      <UpdateNotice />
      <CovidVsSars />
    </Container>
  )
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  margin-top: 60px;
  width: 100%;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    width: 350px;
    grid-template-columns: 1fr;
  }
`

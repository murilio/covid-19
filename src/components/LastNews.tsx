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
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`

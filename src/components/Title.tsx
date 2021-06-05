import styled from 'styled-components'

export default function Title () {
  return (
    <Container>
      <strong>Covid-19</strong> Tendência global
    </Container>
  )
}

export const Container = styled.h1`
  font-weight: 500;
  color: var(--color-dark-blue);
  font-size: 22px;

  strong {
    font-weight: 600;
    color: var(--color-purple);
  }
`

import styled from 'styled-components'

import DataList from './DataList'
import Map from './Map'

export default function Main () {
  return (
    <Container>
      <DataList />
      <div className="containerMain">
        <Map
          location={[-7.1237, -34.8656]}
          defaultPosition={[-7.1237, -34.8656]}
        />
      </div>
    </Container>
  )
}

export const Container = styled.section`
  background-color: var(--color-white);
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .containerMain {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    max-width: 1440px;

    ::-webkit-scrollbar {
      height: 0;
    }

    .leaflet-top {
      inset: auto 20px 20px auto;
    }
  }
`

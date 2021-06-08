import styled from 'styled-components'
import Chart from 'react-google-charts'

const mapsApiKey = process.env.MAPSAPIKEY

export default function GeoChart () {
  return (
    <Container>
      <Chart
        chartType="GeoChart"
        data={[
          ['Country', 'Casos'],
          ['RU', 700],
          ['Canada', 500],
          ['France', 600],
          ['Germany', 200],
          ['Brazil', 1400],
          ['United States', 300],
          ['United Kingdom', 1000]
        ]}
        options={{
          backgroundColor: '#F1F3FB',
          colors: ['#aaa', '#f00']
        }}
        mapsApiKey={mapsApiKey}
        rootProps={{ 'data-testid': '1' }}
      />
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--color-gray);
  padding: 20px;
  border-radius: 20px;
`

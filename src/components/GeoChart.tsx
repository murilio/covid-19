import Chart from 'react-google-charts'

export default function GeoChart () {
  return (
    <Chart
      style={{ width: '100%', minWidth: '600px' }}
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
      mapsApiKey="AIzaSyDwHMq7UAWuwIZTvbyA57qZUDxUjYeLlJw"
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

import { memo, useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

// import L from 'leaflet'

interface MapProps {
  location: any
  defaultPosition: any
}

const Map = ({ location, defaultPosition }: MapProps) => {
  const [map, setMap] = useState(null)

  function handleSetMap () {
    if (map && location) {
      map.flyTo(location, 2, {
        duration: 2
      })
    }
  }

  useEffect(() => handleSetMap, [location])

  return (
    <MapContainer
      center={defaultPosition}
      zoom={2}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
      whenCreated={map => setMap(map)}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
      />
      <Marker position={location} />
    </MapContainer>
  )
}

export default memo(Map)

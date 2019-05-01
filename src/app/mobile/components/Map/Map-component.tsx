import React from 'react';
import { Container } from './Map-styled';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <Container>
        <LeafletMap center={[50, 10]} zoom={6} maxZoom={10}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        </LeafletMap>
      </Container>
    );
  }
}

export default Map;

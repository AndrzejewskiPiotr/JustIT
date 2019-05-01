import React from 'react';
import { Container } from './Map-styled';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import Marker from './Marker/Marker-component';

class Map extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <LeafletMap
          center={[52.3, 19]}
          zoom={5.5}
          maxZoom={17}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {this.props.jobs.map((el: any, index: number) => (
            <Marker
              key={index}
              title={el.title}
              position={[el.latitude, el.longitude]}
            />
          ))}
        </LeafletMap>
      </Container>
    );
  }
}

export default Map;

import React, { FunctionComponent } from 'react';
import { Marker, Popup } from 'react-leaflet';

interface IProps {
  position: [number, number];
  title: string;
}

const MarkerMap: FunctionComponent<IProps> = ({ position, title }) => (
  <Marker position={position}>
    <Popup>{title}</Popup>
  </Marker>
);

export default MarkerMap;

import React, { FunctionComponent } from 'react';
import { Container } from './Filter-styled';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterView: FunctionComponent = (): JSX.Element => (
  <Container>
    <Range
      pushable
      onChange={v => console.log(v)}
      min={0}
      max={33}
      value={[0, 33]}
      dotStyle={{ width: '20px', height: '20px' }}
      handleStyle={[
        { backgroundColor: '#764abc', borderColor: '#764abc', width: '26px', height: '26px' },
        { backgroundColor: '#764abc', borderColor: '#764abc', width: '26px', height: '26px' }]}
      trackStyle={[{ backgroundColor: '#764abc', top: '10px' }]}
    />
  </Container>
);

export default FilterView;

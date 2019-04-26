import React, { FunctionComponent } from 'react';
import { Container } from './Filter-styled';
import RangeInput from 'mobile/components/Filter/RangeInput/RangeInput-component';

const FilterView: FunctionComponent = (): JSX.Element => (
  <Container>
    <RangeInput />
  </Container>
);

export default FilterView;

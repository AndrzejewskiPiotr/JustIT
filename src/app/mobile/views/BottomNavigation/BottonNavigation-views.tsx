import React, { FunctionComponent } from 'react';

import { Container } from './bottomNavigation-styled';
import Tab from 'mobile/components/BottomNavigation/Tab/Tab-component';

const BottomNavigation: FunctionComponent = (): JSX.Element => (
  <Container>
    <Tab />
    <Tab />
    <Tab />
    <Tab />
  </Container>
);

export default BottomNavigation;

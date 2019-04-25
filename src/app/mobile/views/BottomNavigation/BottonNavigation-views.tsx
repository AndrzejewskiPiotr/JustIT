import React, { FunctionComponent } from 'react';

import {
  Container,
  HomeIcon,
  FilterIcon,
  LanguageIcon,
  WorldIcon,
} from './BottomNavigation-styled';
import Tab from 'mobile/components/BottomNavigation/Tab/Tab-component';

const BottomNavigation: FunctionComponent = (): JSX.Element => (
  <Container>
    <Tab text="Home" to={{ pathname: '/' }}>
      <HomeIcon />
    </Tab>
    <Tab text="Filter" to={{ pathname: 'filters' }}>
      <FilterIcon />
    </Tab>
    <Tab text="Languages" to={{ pathname: 'languages' }}>
      <LanguageIcon />
    </Tab>
    <Tab text="Map" to={{ pathname: 'map' }}>
      <WorldIcon />
    </Tab>
  </Container>
);

export default BottomNavigation;

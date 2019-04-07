import React, { FunctionComponent } from 'react';

import {
  Container,
  HomeIcon,
  FilterIcon,
  LanguageIcon,
  WorldIcon
} from './bottomNavigation-styled';
import Tab from 'mobile/components/BottomNavigation/Tab/Tab-component';

const BottomNavigation: FunctionComponent = (): JSX.Element => (
  <Container>
    <Tab text="Home">
      <HomeIcon />
    </Tab>
    <Tab text="Filter">
      <FilterIcon />
    </Tab>
    <Tab text="Languages">
      <LanguageIcon />
    </Tab>
    <Tab text="Map">
      <WorldIcon />
    </Tab>
  </Container>
);

export default BottomNavigation;

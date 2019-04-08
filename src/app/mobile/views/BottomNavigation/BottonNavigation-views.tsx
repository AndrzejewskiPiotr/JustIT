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
    <Tab text="Home" to='/'>
      <HomeIcon />
    </Tab>
    <Tab text="Filter" to='/filter'>
      <FilterIcon />
    </Tab>
    <Tab text="Languages" to='/languages'>
      <LanguageIcon />
    </Tab>
    <Tab text="Map" to='/map'>
      <WorldIcon />
    </Tab>
  </Container>
);

export default BottomNavigation;

import React, { FunctionComponent } from 'react';

import { Container } from './headerNavigation-styled';
import Tabs from './Tab/Tab-component';

const HeaderNavigation: FunctionComponent = (): JSX.Element => (
  <Container>
    <Tabs to="offers" text="job offers" />
    <Tabs to="favourite-offers" text="favourite offers" />
  </Container>
);

export default HeaderNavigation;

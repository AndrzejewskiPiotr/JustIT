import React, { FunctionComponent } from 'react';

import { Container } from './HeaderNavigation-styled';
import Tabs from './Tab/Tab-component';

const HeaderNavigation: FunctionComponent = (): JSX.Element => (
  <Container>
    <Tabs to="/" text="job offers" classnameactive="active" />
    <Tabs
      to="/favourite-offers"
      text="favourite offers"
      classnameactive="active"
    />
  </Container>
);

export default HeaderNavigation;

import React from 'react';

import HeaderView from 'mobile/views/Header/Header-view';
import BottomNavigation from 'mobile/views/BottomNavigation/BottonNavigation-views';
import { Container } from './app-styled';
import { GlobalStyled } from 'globalStyled/app-styled';

const App = (): JSX.Element => (
  <Container>
    <GlobalStyled />
    <HeaderView />
    <BottomNavigation />
  </Container>
);

export default App;

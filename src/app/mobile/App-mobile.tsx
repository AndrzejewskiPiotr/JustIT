import React from 'react';

import HeaderView from 'mobile/views/Header/Header-view';
import { Container } from './app-styled';
import { GlobalStyled } from 'globalStyled/app-styled';

const App = (): JSX.Element => (
  <Container>
    <GlobalStyled />
    <HeaderView />
  </Container>
);

export default App;

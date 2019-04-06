import React from 'react';

import Header from 'common/Header/Header';
import { Container } from './app-styled';
import { GlobalStyled } from 'globalStyled/app-styled';

const App = (): JSX.Element => (
  <Container>
    <GlobalStyled />
    <Header>
      <span>dfdfdfd</span>
    </Header>
  </Container>
);

export default App;

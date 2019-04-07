import React from 'react';

import { Container, Header, Heading } from './app-styled';
import { GlobalStyled } from 'globalStyled/app-styled';

const App = (): JSX.Element => (
  <Container>
    <GlobalStyled />
    <Header>
      <Heading text="justjoin.it" />
    </Header>
  </Container>
);

export default App;

import React, { FunctionComponent } from 'react';
import { Heading, Header } from './header-styled';

const HeaderView: FunctionComponent = (): JSX.Element => (
  <Header>
    <Heading text="justjoin.it" />
  </Header>
);

export default HeaderView;

import React, { FunctionComponent, Fragment } from 'react';
import HeaderNavigation from 'mobile/components/HeaderNavigation/HeaderNavigation-component';
import { Heading, Header } from './header-styled';

const HeaderView: FunctionComponent = (): JSX.Element => (
  <Fragment>
    <Header>
      <Heading text="justjoin.it" />
    </Header>
    <HeaderNavigation />
  </Fragment>
);

export default HeaderView;

import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router';
import { Container } from './HeaderNavigation-styled';
import Tabs from './Tab/Tab-component';

const HeaderNavigation: FunctionComponent<any> = ({
  location,
}) => {
  const { pathname } = location;
  return pathname === '/' || pathname === '/favourite-offers' ? (
    <Container>
      <Tabs to={{ pathname: '/' }} text="job offers" classnameactive="active" />
      <Tabs
        to={{ pathname: '/favourite-offers' }}
        text="favourite offers"
        classnameactive="active"
      />
    </Container>
  ) : null;
};

export default withRouter(HeaderNavigation);

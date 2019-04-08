import React from 'react';

import HeaderView from 'mobile/views/Header/Header-view';
import BottomNavigation from 'mobile/views/BottomNavigation/BottonNavigation-views';
import { Container } from './app-styled';
import { GlobalStyled } from 'globalStyled/app-styled';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

const Elo = () => <div>test</div>;
const Hey = () => <div>map</div>;

const App = (): JSX.Element => (
  <Container>
    <GlobalStyled />
    <Router>
      <HeaderView />
      <Switch>
        <Route path="/" component={Elo} exact/>
        <Route path="/favourites" component={Elo} />
        <Route path="/languages" component={Elo} />
        <Route path="/map" component={Hey} />
        <Redirect from="*" to="/" />
      </Switch>
      <BottomNavigation />
    </Router>
  </Container>
);

export default App;

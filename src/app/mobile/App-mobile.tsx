import React, { FunctionComponent, useEffect } from 'react';
import { thunkSendMessage } from 'redux/jobs/jobs-actions';
import { connect } from 'react-redux';
import HeaderView from 'mobile/views/Header/Header-view';
import BottomNavigation from 'mobile/views/BottomNavigation/BottonNavigation-views';
import FilterView from 'mobile/views/Filter/Filter-view';
import Languages  from 'mobile/views/Languages/Languages-view';
import JobsList from 'mobile/views/JobsList/JobsList-view';
import JobDetail from 'mobile/views/JobDetail/JobDetail-view';
import { Container } from './App-styled';
import { GlobalStyled } from 'globalStyled/app-styled';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

interface IMatchParams {
  id: string;
}

const Elo = () => <JobsList />;
const Heyd = ({ match }: RouteComponentProps<IMatchParams>) => {
  console.log(match);
  return <div>czzx</div>;
};
const Heyf = () => <div>languages</div>;
const Hey = () => <div>map</div>;

interface IProps {
  thunkSendMessage: () => any;
}

const App: FunctionComponent<IProps> = ({ thunkSendMessage }): JSX.Element => {
  useEffect(() => {
    thunkSendMessage();
  }, []);

  return (
    <Container>
      <GlobalStyled />
      <Router>
        <HeaderView />
        <Switch>
          <Route path="/" component={Elo} exact />
          <Route path="/offers/:id" component={JobDetail} exact />
          <Route path="/favourite-offers" component={Heyd} />
          <Route path="/filters" component={FilterView} />
          <Route path="/languages" component={Languages} />
          <Route path="/map" component={Hey} />
          <Redirect from="*" to="/" />
        </Switch>
        <BottomNavigation />
      </Router>
    </Container>
  );
};

export default connect(
  null,
  { thunkSendMessage },
)(App);

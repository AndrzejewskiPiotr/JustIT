import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { compose, branch, renderComponent } from 'recompose';

import DesktopApp from 'desktop/App-desktop';
import MobileApp from 'mobile/App-mobile';
import TabletApp from 'tablet/App-tablet';

const App: React.FunctionComponent<any> = (): JSX.Element => <React.Fragment />;

export default compose(
  branch(
    (): boolean => isTablet,
    renderComponent(TabletApp),
    isMobile ? renderComponent(MobileApp) : renderComponent(DesktopApp),
  ),
)(App);

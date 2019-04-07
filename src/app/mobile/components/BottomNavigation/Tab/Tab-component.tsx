import React, { FunctionComponent } from 'react';

import { Wrapper, Text, HomeIcon } from './tab-styled';

const Tab: FunctionComponent = () => (
  <Wrapper>
    <HomeIcon />
    <Text text="Home" />
  </Wrapper>
);

export default Tab;

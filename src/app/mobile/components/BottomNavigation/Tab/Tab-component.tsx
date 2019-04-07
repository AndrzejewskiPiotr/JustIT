import React, { FunctionComponent, ReactNode } from 'react';

import { Wrapper, Text } from './tab-styled';

interface IProps {
  text: string;
  children: ReactNode;
  className?: string;
}

const Tab: FunctionComponent<IProps> = ({
  text,
  children,
  ...rest
}): JSX.Element => (
  <Wrapper {...rest}>
    {children}
    <Text text={text} />
  </Wrapper>
);

export default Tab;

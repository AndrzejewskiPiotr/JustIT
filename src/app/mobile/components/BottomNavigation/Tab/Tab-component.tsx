import React, { FunctionComponent, ReactNode } from 'react';

import { WrapperLink, Text } from './Tab-styled';

interface IProps {
  to: { pathname: string; search?: string; state?: {} };
  text: string;
  children: ReactNode;
  className?: string;
}

const Tab: FunctionComponent<IProps> = ({
  text,
  children,
  ...rest
}): JSX.Element => (
  <WrapperLink {...rest}>
    {children}
    <Text text={text} />
  </WrapperLink>
);

export default Tab;

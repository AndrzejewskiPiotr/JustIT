import React, { FunctionComponent, ReactNode } from 'react';

import { WrapperLink, Text } from './tab-styled';

interface IProps {
  to: string;
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

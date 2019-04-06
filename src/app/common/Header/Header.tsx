import React, { FunctionComponent, ReactNode } from 'react';

import { Element } from './header-styled';

interface IProps {
  children: ReactNode;
  className?: string;
}

const Header: FunctionComponent<IProps> = ({
  children,
  ...rest
}): JSX.Element => <Element {...rest}>{children}</Element>;

export default Header;

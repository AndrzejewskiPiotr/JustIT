import React, { FunctionComponent, ReactNode } from 'react';
import { Element } from './link-styled';

interface IProps {
  to: string;
  children?: ReactNode;
  className?: string;
}

const CommonLink: FunctionComponent<IProps> = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
);

export default CommonLink;

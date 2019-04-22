import React, { FunctionComponent, ReactNode } from 'react';
import { Element } from './Link-styled';

interface IProps {
  to: { pathname: string; search?: string; state?: {} };
  text?: string;
  children?: ReactNode;
  classnameactive?: string;
  className?: string;
}

const CommonLink: FunctionComponent<IProps> = ({ text, children, ...rest }) => (
  <Element exact {...rest}>
    {text || children}
  </Element>
);

export default CommonLink;

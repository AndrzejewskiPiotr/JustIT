import React from 'react';
import { Wrapper, Link } from './Tab-styled';

interface IProps {
  to: { pathname: string; search?: string; state?: {} };
  text: string;
  classnameactive?: string;
}

const Tabs: React.FunctionComponent<IProps> = ({
  text,
  ...rest
}): JSX.Element => (
  <Wrapper>
    <Link {...rest}>{text}</Link>
  </Wrapper>
);

export default Tabs;

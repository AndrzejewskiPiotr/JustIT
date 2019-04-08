import React from 'react';
import { Wrapper, Link } from './tab-styled';

interface IProps {
  to: string;
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

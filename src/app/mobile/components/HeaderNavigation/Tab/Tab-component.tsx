import React from 'react';
import { Wrapper, Link } from './tab-styled';

interface IProps {
  to: string;
  text: string;
  classNameActive?: string;
}

const Tabs: React.FunctionComponent<IProps> = ({ text, to }): JSX.Element => (
  <Wrapper>
    <Link href={to}>{text}</Link>
  </Wrapper>
);

export default Tabs;

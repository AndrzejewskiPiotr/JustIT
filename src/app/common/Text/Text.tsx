import React from 'react';
import { Element } from './Text-styled';

interface IProps {
  text: string;
  className?: string;
}

const CommonText: React.FunctionComponent<IProps> = ({ text, ...rest }) => (
  <Element {...rest}>{text}</Element>
);

export default CommonText;

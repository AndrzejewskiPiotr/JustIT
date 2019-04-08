import React, { FunctionComponent } from 'react';

import { Element } from './Heading-styled';

interface IProps {
  text: string;
  className?: string;
}

const CommonHeading: FunctionComponent<IProps> = ({
  text,
  ...rest
}): JSX.Element => <Element {...rest}>{text}</Element>;

export default CommonHeading;

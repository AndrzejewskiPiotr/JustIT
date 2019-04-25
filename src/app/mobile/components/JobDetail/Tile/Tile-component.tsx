import React, { FunctionComponent } from 'react';
import { Wrapper, Text, Heading } from './Tile-styled';

interface IProps {
  text: string;
  heading: string;
  classname?: string;
}

const Tile: FunctionComponent<IProps> = ({
  text,
  heading,
  ...rest
}): JSX.Element => (
  <Wrapper {...rest}>
    <Text text={text} />
    <Heading text={heading} />
  </Wrapper>
);

export default Tile;

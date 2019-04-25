import React, { FunctionComponent } from 'react';
import { Wrapper, Title } from './JobHeading-styled';

interface IProps {
  title: string;
  classname?: string;
}

const JobHeading: FunctionComponent<IProps> = ({
  title,
  ...rest
}): JSX.Element => (
  <Wrapper {...rest}>
    <Title text={title} />
  </Wrapper>
);

export default JobHeading;

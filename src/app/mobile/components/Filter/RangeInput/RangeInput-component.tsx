import React, { FunctionComponent } from 'react';
import { Container, Wrapper, Title } from './RangeInput-styled';
import CommonRangeInput from 'common/RangeInput/RangeInput-common';

const RangeInput: FunctionComponent<any> = (): JSX.Element => (
  <Container>
    <Title>Salary</Title>
    <Wrapper>
      <CommonRangeInput
        max={33}
        min={0}
        onChange={function dd(e: any) {
          console.log(e);
        }}
        value={[0, 33]}
      />
    </Wrapper>
  </Container>
);

export default RangeInput;

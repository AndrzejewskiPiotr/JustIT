import React, { FunctionComponent } from 'react';
import {
  Container,
  Wrapper,
  Title,
  MarginWrapper,
  SalaryTo,
  SalaryWrapper,
  SalaryFrom,
} from './RangeInput-styled';
import CommonRangeInput from 'common/RangeInput/RangeInput-common';

const RangeInput: FunctionComponent<any> = (): JSX.Element => (
  <Container>
    <Title>Salary</Title>
    <Wrapper>
      <MarginWrapper>
        <CommonRangeInput
          max={33}
          min={0}
          onChange={function dd(e: any) {
            console.log(e);
          }}
          value={[0, 33]}
        />
      </MarginWrapper>
      <SalaryWrapper>
        <SalaryTo text="0k" />
        <SalaryFrom text="33k" />
      </SalaryWrapper>
    </Wrapper>
  </Container>
);

export default RangeInput;

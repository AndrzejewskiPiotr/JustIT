import React, { Dispatch, FunctionComponent } from 'react';
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
import { connect } from 'react-redux';
import { AppState } from 'store/store';
import { handleSalaryUpdate } from 'redux/filters/filter-actions';
import {
  ISalaryFilter,
  FilterActionTypes,
  IFilterState,
} from 'redux/filters/filter-types';

const mapStateToProps = (state: AppState) => ({
  minSalary: state.filterReducer.minSalary,
  maxSalary: state.filterReducer.maxSalary,
});

const mapDispatchToProps = (dispatch: Dispatch<FilterActionTypes>) => ({
  handleSalaryUpdate: (data: IFilterState[]) =>
    dispatch(handleSalaryUpdate(data)),
});

const RangeInput: FunctionComponent<any> = ({
  minSalary,
  maxSalary,
  handleSalaryUpdate,
}): JSX.Element => (
  <Container>
    <Title>Salary</Title>
    <Wrapper>
      <MarginWrapper>
        <CommonRangeInput
          max={maxSalary}
          min={minSalary}
          onChange={handleSalaryUpdate}
          value={[minSalary, maxSalary]}
        />
      </MarginWrapper>
      <SalaryWrapper>
        <SalaryTo text={`${minSalary}k`} />
        <SalaryFrom text={`${maxSalary}k`} />
      </SalaryWrapper>
    </Wrapper>
  </Container>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RangeInput);

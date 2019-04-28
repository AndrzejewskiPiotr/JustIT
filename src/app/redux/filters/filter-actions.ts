import { CHANGE_SALARY_RANGE, IFilterState } from './filter-types';

export const handleSalaryUpdate = (data: IFilterState[]) => ({
  type: CHANGE_SALARY_RANGE,
  data,
});

import { IFilterState } from './filter-types';

const initialState: IFilterState = {
  minSalary: 0,
  maxSalary: 33,
};

const FilterReducer = (state = initialState) => {
  return state;
};

export default FilterReducer;

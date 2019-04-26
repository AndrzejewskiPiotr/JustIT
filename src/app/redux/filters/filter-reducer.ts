import { IFilterState } from './filter-types';

const initialState: IFilterState = {
  minSalary: 0,
  maxSalary: 55,
};

const FilterReducer = (state = initialState) => {
  return state;
};

export default FilterReducer;

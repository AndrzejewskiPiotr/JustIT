import { IFilterState, CHANGE_SALARY_RANGE } from './filter-types';

const initialState: IFilterState = {
  minSalary: 0,
  maxSalary: 35,
};

const FilterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_SALARY_RANGE:
      const [newMinSalary, newMaxSalary] = action.data;
      return {
        ...state,
        minSalary: newMinSalary,
        maxSalary: newMaxSalary,
      };
    default:
      return state;
  }
};

export default FilterReducer;

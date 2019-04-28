export interface IFilterState {
  minSalary: number;
  maxSalary: number;
}

export const CHANGE_SALARY_RANGE: string = '@@UPDATE_SALARY_FILTER';

export interface ISalaryFilter {
  type: typeof CHANGE_SALARY_RANGE;
  data: IFilterState[];
}

export type FilterActionTypes = ISalaryFilter;

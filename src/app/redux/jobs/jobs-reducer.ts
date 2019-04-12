import {
  IJobsState,
  REQUEST_JOBS,
  RECEIVE_JOBS,
  JobsActionTypes,
  REQUEST_JOBS_ERROR,
} from './jobs-types';

const initialState: IJobsState = {
  jobs: [],
  isLoading: false,
  error: false,
};

const jobsReducer = (
  state = initialState,
  action: JobsActionTypes,
): IJobsState => {
  switch (action.type) {
    case REQUEST_JOBS:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_JOBS:
      return {
        ...state,
        jobs: action.data,
        isLoading: false,
      };
    case REQUEST_JOBS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default jobsReducer;

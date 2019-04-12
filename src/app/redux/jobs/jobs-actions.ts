import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  REQUEST_JOBS_ERROR,
  RECEIVE_JOBS,
  REQUEST_JOBS,
  IJobs
} from './jobs-types';

const requestJobs = () => ({
  type: REQUEST_JOBS
});

const receiveJobs = (data: IJobs) => ({
  type: RECEIVE_JOBS,
  data
});

const catchError = (error: any) => ({
  type: REQUEST_JOBS_ERROR,
  error
});

export const thunkSendMessage = (): ThunkAction<
  void,
  null,
  null,
  Action<string>
> => async dispatch => {
  dispatch(requestJobs());
  try {
    const asyncResponse = await fetch('https://test.justjoin.it/offers');
    const data = await asyncResponse.json();
    dispatch(receiveJobs(data));
  } catch (err) {
    dispatch(catchError(err));
  }
};

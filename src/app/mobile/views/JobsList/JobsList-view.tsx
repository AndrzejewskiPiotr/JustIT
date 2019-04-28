import React, { FunctionComponent } from 'react';
import { AppState } from 'store/store';
import { IJobsState } from 'redux/jobs/jobs-types';
import { connect } from 'react-redux';
import ListView from 'mobile/components/JobsList/List/List-component';
import { search } from 'utility/offersFilter';

const mapStateToProps = (state: AppState) => ({
  jobs: state.jobsReducer.jobs,
  isLoading: state.jobsReducer.isLoading,
  error: state.jobsReducer.error,
  languages: state.filterLanguageReducer.languagesFilter,
});

const Err = ({ error }: { error: any }) => <span>Error:{error.message}</span>;

const JobsList: FunctionComponent<IJobsState | any> = ({
  jobs,
  isLoading,
  languages,
  error,
}) => {
  const jobsSearched = search(jobs, languages);
  if (isLoading) return <Err error={error} />;
  if (error) return <Err error={error} />;
  return <ListView jobs={jobsSearched} />;
};
export default connect(mapStateToProps)(JobsList);

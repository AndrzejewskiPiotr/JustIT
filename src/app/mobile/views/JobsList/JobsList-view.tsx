import React, { FC, FunctionComponent } from 'react';
import { Container } from './JobsList-styled';
import JobTab from 'mobile/components/JobsList/JobTab/JobTab-component';
import { AppState } from 'store/store';
import { IJobs } from 'redux/jobs/jobs-types';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
  jobs: state.jobsReducer.jobs,
  isLoading: state.jobsReducer.isLoading,
  error: state.jobsReducer.error,
});

const JobsList = (props: any) => (
  <Container>
    {props.jobs.map((el: IJobs, index: string) => (
      <JobTab
        key={index}
        id={el.id}
        experience={el.experience_level}
        title={el.title}
        salaryFrom={el.salary_from}
        salaryTo={el.salary_to}
        logoUrl={el.company_logo_url}
        currency={el.salary_currency}
      />
    ))}
  </Container>
);

export default connect(mapStateToProps)(JobsList);

import React, { FunctionComponent } from 'react';
import Map from 'mobile/components/Map/Map-component';
import { connect } from 'react-redux';
import { search } from 'utility/offersFilter';

const mapStateToProps = (state: any) => ({
  jobs: state.jobsReducer.jobs,
  languages: state.filterLanguageReducer.languagesFilter,
});

const MapView: FunctionComponent<any> = ({ jobs, languages }): JSX.Element => {
  const jobsSearched = search(jobs, languages);
  return <Map jobs={jobsSearched} />;
};

export default connect(mapStateToProps)(MapView);

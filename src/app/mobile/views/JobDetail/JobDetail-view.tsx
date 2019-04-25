import React, { FunctionComponent } from 'react';
import Detail from 'mobile/components/JobDetail/Detail/Detail-component';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container } from './JobDetail-styled';

const JobDetail: FunctionComponent<RouteComponentProps<any>> = ({
  location,
}) => {
  const { data } = location.state;
  return (
    <Container>
      <Detail data={data} />
    </Container>
  );
};

export default withRouter(JobDetail);

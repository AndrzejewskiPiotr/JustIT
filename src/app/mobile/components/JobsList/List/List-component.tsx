import React, { FunctionComponent, PureComponent } from 'react';
import { Container } from './List-styled';
import JobTab from 'mobile/components/JobsList/JobTab/JobTab-component';
import { IJobs } from 'redux/jobs/jobs-types';
import { List, AutoSizer } from 'react-virtualized';

interface IProps {
  jobs: IJobs[];
}

const ListView: FunctionComponent<IProps> = ({ jobs }) => {
  const rowRenderer = ({
    key,
    index,
    style,
  }: {
    key: string;
    index: number;
    style: React.CSSProperties;
  }) => {
    const job = jobs[index];
    return (
      <JobTab
        style={style}
        key={key}
        id={job.id}
        experience={job.experience_level}
        title={job.title}
        salaryFrom={job.salary_from}
        salaryTo={job.salary_to}
        logoUrl={job.company_logo_url}
        currency={job.salary_currency}
      />
    );
  };
  return (
    <Container>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List
            height={height}
            rowHeight={86}
            rowCount={jobs.length}
            width={width}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </Container>
  );
};

export default ListView;

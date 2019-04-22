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
    return <JobTab style={style} key={key} id={job.id} jobData={job} />;
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

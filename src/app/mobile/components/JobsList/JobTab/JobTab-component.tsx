import React, { FunctionComponent } from 'react';
import {
  Wrapper,
  CompanyLogo,
  Row,
  Title,
  Salary,
  ExpLevel,
  ImageWrapper,
  ExpRow,
} from './JobTab-styled';
import { getBackgroundColor } from 'utility/getExpLevelBackgoundColor';
import { IJobs } from 'redux/jobs/jobs-types';

interface IProps {
  key: string;
  id: string;
  style?: React.CSSProperties;
  jobData: IJobs;
}

const JobTab: FunctionComponent<IProps> = ({ jobData, ...rest }) => {
  const {
    id,
    salary_from,
    salary_to,
    company_logo_url,
    experience_level,
    title,
    salary_currency,
  } = jobData;
  const backgroundColor = getBackgroundColor(experience_level);
  const salary = `${salary_from} - ${salary_to} - ${salary_currency}`;
  return (
    <Wrapper
      to={{
        pathname: `/offers/${id}`,
        state: { data: jobData },
      }}
      {...rest}
    >
      <ImageWrapper>
        <CompanyLogo src={company_logo_url} />
      </ImageWrapper>
      <Row>
        <Title text={title} />
        <Salary text={salary} />
      </Row>
      <ExpRow>
        <ExpLevel text={experience_level} backgroundColor={backgroundColor} />
      </ExpRow>
    </Wrapper>
  );
};

export default JobTab;

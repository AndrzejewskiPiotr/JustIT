import React, { FunctionComponent } from 'react';
import {
  Container,
  Wrapper,
  Row,
  CompanyName,
  CompanySize,
  CompanyExperience,
  CompanyEmploymentType,
} from './Detail-styled';
import JobHeading from 'mobile/components/JobDetail/JobHeading/JobHeading-component';
import Skills from 'mobile/components/JobDetail/Skills/Skills-component';

const Detail: FunctionComponent<any> = ({ data }) => {
  const {
    title,
    company_name,
    company_size,
    employment_type,
    experience_level,
    city,
    street,
    salary_from,
    salary_to,
    salary_currency,
    skills,
  } = data;
  return (
    <Container>
      <JobHeading title={title} />
      <Wrapper>
        <Row>
          <CompanyName text={company_name} heading="Company Name" />
          <CompanySize text={company_size} heading="Company Size" />
        </Row>
        <Row>
          <CompanyEmploymentType text={employment_type} heading="EMP.type" />
          <CompanyExperience text={experience_level} heading="EXP.lvl" />
        </Row>
        <Row>
          <CompanyEmploymentType
            text={`${street}, ${city}`}
            heading="address"
          />
          <CompanyExperience
            text={`${salary_from} - ${salary_to} ${salary_currency}`}
            heading="Salary"
          />
        </Row>
        <Skills title="Required skills" skills={skills} />
      </Wrapper>
    </Container>
  );
};

export default Detail;

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

const Detail: FunctionComponent<any> = ({ data }) => (
  <Container>
    <JobHeading title={data.title} />
    <Wrapper>
      <Row>
        <CompanyName text={data.company_name} heading="Company Name" />
        <CompanySize text={data.company_size} heading="Company Size" />
      </Row>
      <Row>
        <CompanyEmploymentType text={data.employment_type} heading="EMP.type" />
        <CompanyExperience text={data.experience_level} heading="EMP.lvl" />
      </Row>
      <Row>
        <CompanyEmploymentType
          text={`${data.street}, ${data.city}`}
          heading="address"
        />
        <CompanyExperience
          text={`${data.salary_from} - ${data.salary_from} ${
            data.salary_currency
          }`}
          heading="EMP.lvl"
        />
      </Row>
      <Skills title="Required skills" skills={data.skills} />
    </Wrapper>
  </Container>
);

export default Detail;

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

interface IProps {
  key: string;
  id: string;
  experience: string;
  title: string;
  salaryFrom: number;
  salaryTo: number;
  logoUrl: string;
  currency: string;
  style?: React.CSSProperties;
}

const JobTab: FunctionComponent<IProps> = ({
  logoUrl,
  currency,
  salaryFrom,
  salaryTo,
  title,
  experience,
  ...rest
}) => {
  const backgroundColor = getBackgroundColor(experience);
  const salary = salaryFrom + ' - ' + salaryTo + ' ' + currency;
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <CompanyLogo src={logoUrl} />
      </ImageWrapper>
      <Row>
        <Title text={title} />
        <Salary text={salary} />
      </Row>
      <ExpRow>
        <ExpLevel text={experience} backgroundColor={backgroundColor} />
      </ExpRow>
    </Wrapper>
  );
};

export default JobTab;

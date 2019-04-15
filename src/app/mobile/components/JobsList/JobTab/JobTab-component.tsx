import React from 'react';
import {
  Wrapper,
  CompanyLogo,
  Row,
  Title,
  Salary,
  ExpLevel,
  ImageWrapper,
} from './JobTab-styled';
import { getBackgroundColor } from 'utility/getExpLevelBackgoundColor';

const JobTab = () => {
  const backgroundColor = getBackgroundColor('mid');
  return (
    <Wrapper>
      <ImageWrapper>
        <CompanyLogo src="https://bucket.justjoin.it/offers/company_logos/thumb/b14fde3218991ca24c0a030945e9d084716cb161.png?1553502421" />
      </ImageWrapper>
      <Row>
        <Title text="Front-end Developer" />
        <Salary text="7 000 - 9 000 PLN" />
      </Row>
      <Row>
        <ExpLevel text="mid" backgroundColor={backgroundColor} />
      </Row>
    </Wrapper>
  );
};

export default JobTab;

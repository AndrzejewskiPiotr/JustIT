import styled from 'styled-components';
import Tile from 'mobile/components/JobDetail/Tile/Tile-component';

const Container = styled.div`
  padding: 0 5px 5px 5px;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const CompanyName = styled(Tile)`
  flex: 1;
`;

const CompanySize = styled(Tile)`
  flex: 1;
`;

const CompanyExperience = styled(Tile)`
  flex: 1;
`;

const CompanyEmploymentType = styled(Tile)`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row;
`;

export {
  Row,
  Container,
  Wrapper,
  CompanyName,
  CompanySize,
  CompanyExperience,
  CompanyEmploymentType,
};

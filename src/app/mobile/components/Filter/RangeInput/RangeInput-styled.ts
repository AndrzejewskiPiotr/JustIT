import styled from 'styled-components';
import CommonText from 'common/Text/Text';

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: white;
`;

const MarginWrapper = styled.div`
  padding: 15px 20px;
`;

const SalaryWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const SalaryTo = styled(CommonText)`
  color: black;
  font-size: 16px;
`;

const SalaryFrom = styled(CommonText)`
  color: black;
  font-size: 16px;
`;

const Title = styled.div`
  background-color: white;
  color: black;
  margin-bottom: 2px;
  font-weight: bold;
  padding: 12px 20px;
  font-size: 18px;
`;

export {
  Container,
  Wrapper,
  Title,
  MarginWrapper,
  SalaryFrom,
  SalaryTo,
  SalaryWrapper,
};

import styled from 'styled-components';
import CommonText from 'common/Text/Text';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 20px 1px 1px;
`;

const Title = styled(CommonText)`
  margin: 10px;
  font-size: 1.3rem;
  color: #37474f;
  text-align: center;
  font-weight: bold;
`;

export { Wrapper, Title };

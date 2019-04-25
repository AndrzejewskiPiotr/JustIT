import styled from 'styled-components';
import CommonText from 'common/Text/Text';

interface IStar {
  active: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;
  flex: 1 0 50%;
  margin: 0 0 20px 0;
`;

const Title = styled(CommonText)`
  color: black;
  font-size: 16px;
  margin: 0 0 0 10px;
`;

const Experience = styled(CommonText)`
  color: #99a1ab;
  font-size: 15px;
  margin: 5px 0 0 10px;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 8px;
`;

const Star = styled.div<IStar>`
  background-color: ${props => (props.active ? '#764abc' : '#c7ced6')};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 0 0 10px;
`;

export { Wrapper, Title, RatingWrapper, Star, Experience };

import styled from 'styled-components';
import CommonText from 'common/Text/Text';
import CommonHeading from 'common/Heading/Heading';

const Wrapper = styled.div`
  background-color: white;
  text-align: center;
  padding: 15px 5px;
  box-sizing: border-box;
  margin: 1px;
`;

const Heading = styled(CommonHeading)`
  white-space: nowrap;
  color: #99a1ab;
  font-size: 13px;
`;

const Text = styled(CommonText)`
  color: #37474f;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;

export { Wrapper, Heading, Text };

import styled from 'styled-components';
import CommonText from 'common/Text/Text';

const Wrapper = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  min-height: 90px;
  background-color: white;
  box-shadow: rgba(128, 128, 128, 0.5) 0 1px 4px 0;
  border-radius: 6px;
  margin: 12px;
  border: 0;
`;

const Text = styled(CommonText)`
  color: black;
  font-size: 1.3rem;
  text-align: center;
  line-height: 90px;
`;

export { Wrapper, Text };

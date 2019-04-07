import styled from 'styled-components';
import CommonText from 'common/Text/Text';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  justify-content: center;
  padding: 0 0 5px 0;
`;

const Text = styled(CommonText)`
  text-transform: uppercase;
  align-self: center;
`;

export { Wrapper, Text };

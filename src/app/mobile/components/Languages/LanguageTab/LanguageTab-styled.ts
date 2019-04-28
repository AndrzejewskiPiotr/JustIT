import styled from 'styled-components';
import CommonText from 'common/Text/Text';

interface IProps {
  isActive: boolean;
}

const Wrapper = styled.li<IProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  min-height: 90px;
  background-color: white;
  box-shadow: rgba(128, 128, 128, 0.5) 0 1px 4px 0;
  border-radius: 6px;
  margin: 12px;
  border: ${props =>
    props.isActive ? '1px solid #673AB7' : '1px solid white'};
`;

const Text = styled(CommonText)`
  color: black;
  font-size: 1.3rem;
  text-align: center;
  line-height: 90px;
`;

export { Wrapper, Text };

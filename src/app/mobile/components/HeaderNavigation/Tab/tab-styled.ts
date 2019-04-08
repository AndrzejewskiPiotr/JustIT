import styled from 'styled-components';
import CommonLink from 'common/Link/Link';
import * as COLOR from 'globalStyled/app-colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding-bottom: 4px;
`;

const Link = styled(CommonLink)`
  font-size: 1.1rem;
  color: ${COLOR.FONT_WHITE};
  border-bottom: 2px solid transparent;
  text-decoration: none;
  font-weight: 700;
  margin: 0 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 100%;

  &&.active {
    border-bottom: 2px solid ${COLOR.BACKGROUND_COLOR_2};
  }
`;

export { Wrapper, Link };

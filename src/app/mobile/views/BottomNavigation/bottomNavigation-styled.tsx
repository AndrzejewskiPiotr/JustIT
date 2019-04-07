import styled from 'styled-components';
import * as COLOR from 'globalStyled/app-colors';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  color: black;
  background-color: ${COLOR.BACKGROUND_COLOR_2};
  margin-top: 0.5px;
  height: 56px;
`;

export { Container };

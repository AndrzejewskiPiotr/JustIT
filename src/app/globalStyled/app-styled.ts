import { createGlobalStyle } from 'styled-components';
import * as COLORS from './app-colors';

const GlobalStyled = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
    background-color: ${COLORS.BACKGROUND_COLOR_APP};
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    color: ${COLORS.FONT_WHITE};
    margin: 0;
    padding: 0;
  }
`;

export { GlobalStyled };

import React, { FunctionComponent } from 'react';
import LanguagesList from 'mobile/components/Languages/LanguagesList-component';
import { Container } from './Languages-styled';

const Languages = ['java', 'ruby', 'php'];

const LanguagesView: FunctionComponent<{}> = (): JSX.Element => (
  <Container>
    <LanguagesList languages={Languages} />
  </Container>
);
export default LanguagesView;

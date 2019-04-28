import React, { FunctionComponent } from 'react';
import { Container } from './LanguagesList-styled';
import LanguageTab from './LanguageTab/LanguageTab-component';

interface IProps {
  languages: string[];
}

const LanguagesList: FunctionComponent<IProps> = ({ languages }) => (
  <Container>
    {languages.map((name: string, index: number) => (
      <LanguageTab key={index} text={name} />
    ))}
  </Container>
);

export default LanguagesList;

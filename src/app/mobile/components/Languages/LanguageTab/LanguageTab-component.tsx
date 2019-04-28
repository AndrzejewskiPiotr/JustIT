import React, { FunctionComponent } from 'react';
import { Wrapper, Text } from './LanguageTab-styled';

interface IProps {
  text: string;
}

const LanguageTab: FunctionComponent<IProps> = ({ text }): JSX.Element => (
  <Wrapper>
    <Text text={text} />
  </Wrapper>
);

export default LanguageTab;

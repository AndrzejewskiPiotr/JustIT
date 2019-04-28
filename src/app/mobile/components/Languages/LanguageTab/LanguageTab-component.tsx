import React, { FunctionComponent } from 'react';
import { Wrapper, Text } from './LanguageTab-styled';

interface IProps {
  text: string;
  handleUpdateLanguageFilter: (text: any) => any;
  isActive: boolean;
}

const LanguageTab: FunctionComponent<IProps> = ({
  text,
  isActive,
  handleUpdateLanguageFilter,
}): JSX.Element => (
  <Wrapper onClick={() => handleUpdateLanguageFilter(text)} isActive={isActive}>
    <Text text={text} />
  </Wrapper>
);

export default LanguageTab;

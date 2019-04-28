import React, { FunctionComponent } from 'react';
import { Wrapper, Text } from './LanguageTab-styled';

interface IProps {
  text: string;
  handleUpdateLanguageFilter: (text: any) => any;
}

const LanguageTab: FunctionComponent<IProps> = ({
  text,
  handleUpdateLanguageFilter,
}): JSX.Element => (
  <Wrapper onClick={() => handleUpdateLanguageFilter(text)}>
    <Text text={text} />
  </Wrapper>
);

export default LanguageTab;

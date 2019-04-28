import React, { FunctionComponent } from 'react';
import { Container } from './LanguagesList-styled';
import LanguageTab from './LanguageTab/LanguageTab-component';
import { connect } from 'react-redux';
import { handleUpdateLanguageFilter } from 'redux/languages/languages-actions';

const mapDispatchToProps = (dispatch: any) => ({
  handleUpdateLanguageFilter: (data: string) =>
    dispatch(handleUpdateLanguageFilter(data)),
});

interface IProps {
  languages: string[];
  handleUpdateLanguageFilter: (text: any) => any;
}

const LanguagesList: FunctionComponent<IProps> = ({
  languages,
  handleUpdateLanguageFilter,
}) => (
  <Container>
    {languages.map((name: string, index: number) => (
      <LanguageTab
        key={index}
        text={name}
        handleUpdateLanguageFilter={handleUpdateLanguageFilter}
      />
    ))}
  </Container>
);

export default connect(
  null,
  mapDispatchToProps,
)(LanguagesList);

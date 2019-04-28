import React, { FunctionComponent } from 'react';
import { Container } from './LanguagesList-styled';
import LanguageTab from './LanguageTab/LanguageTab-component';
import { connect } from 'react-redux';
import { handleUpdateLanguageFilter } from 'redux/languages/languages-actions';
import { AppState } from 'store/store';

const mapStateToProps = (state: AppState) => ({
  languageFilter: state.filterLanguageReducer.languagesFilter,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleUpdateLanguageFilter: (data: string) =>
    dispatch(handleUpdateLanguageFilter(data)),
});

interface IProps {
  languages: string[];
  languageFilter: any[];
  handleUpdateLanguageFilter: (text: any) => any;
}

const LanguagesList: FunctionComponent<IProps> = ({
  languages,
  languageFilter,
  handleUpdateLanguageFilter,
}) => {
  const isActiveLanguage = (lan: string) => languageFilter.includes(lan);
  return (
    <Container>
      {languages.map((name: string, index: number) => (
        <LanguageTab
          key={index}
          text={name}
          isActive={isActiveLanguage(name)}
          handleUpdateLanguageFilter={handleUpdateLanguageFilter}
        />
      ))}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguagesList);

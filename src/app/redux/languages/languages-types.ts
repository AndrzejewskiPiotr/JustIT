export interface ILanguageFilterState {
  languagesFilter: string[];
}

export const UPDATE_LANGUAGE_FILTER = '@@UPDATE_LANGUAGE_FILTER';

export interface IUpdateLanguage {
  type: typeof UPDATE_LANGUAGE_FILTER;
  data: string;
}

export type LanguageFilterActionTypes = IUpdateLanguage;

import { UPDATE_LANGUAGE_FILTER } from './languages-types';

export const handleUpdateLanguageFilter = (data: string) => ({
  type: UPDATE_LANGUAGE_FILTER,
  data,
});

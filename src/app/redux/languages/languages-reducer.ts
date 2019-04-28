import { UPDATE_LANGUAGE_FILTER } from './languages-types';

const initialState: any = {
  languagesFilter: [],
};

const LanguagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_LANGUAGE_FILTER:
      const filters = state.languagesFilter.includes(action.data)
        ? state.languagesFilter.filter((lan: string) => lan !== action.data)
        : state.languagesFilter.push(action.data);
      return {
        ...state,
        languagesFilter: filters,
      };
    default:
      return state;
  }
};

export default LanguagesReducer;

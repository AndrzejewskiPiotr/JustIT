import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from 'redux/filters/filter-reducer';
import jobsReducer from 'redux/jobs/jobs-reducer';
import filterLanguageReducer from 'redux/languages/languages-reducer';

const rootReducer = combineReducers({
  filterLanguageReducer,
  jobsReducer,
  filterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleware = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}

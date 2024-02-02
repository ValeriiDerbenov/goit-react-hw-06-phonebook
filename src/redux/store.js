import { legacy_createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import rootReducer from './rootReducer';

const initialState = {
  contacts: [],
};

const reducer = (state = initialState) => {
  return state;
};

const enchancer = devToolsEnhancer();

const store = legacy_createStore(reducer, enchancer);

// const store = legacy_createStore(rootReducer, enchancer);

export default store;

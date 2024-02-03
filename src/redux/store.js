import { legacy_createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';
// import rootReducer from './rootReducer';

const initialState = {
  contacts: [{ id: nanoid(6), name: 'Valerii', number: '+380 98 380 4 380' }],
};

const reducer = (state = initialState) => {
  return state;
};

const enchancer = devToolsEnhancer();

const store = legacy_createStore(reducer, enchancer);

// const store = legacy_createStore(rootReducer, enchancer);

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { featureReducers } from './reducers/countReducers';

const reducer = combineReducers({
  countData: featureReducers,
});

const initialState = {
  countData: {
    loading: false,
    value: 0,
    isError: false,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

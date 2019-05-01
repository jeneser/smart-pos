import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const makeStore = createStore(
  rootReducer,
  // state,
  composeEnhancers()
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export default makeStore;

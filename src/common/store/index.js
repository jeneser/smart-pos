import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mockOrderList, mockDiscountList } from '../mock/products';

const state = {
  currentCustomer: {
    id: 'customer_2',
    name: '蓝越'
  },
  customer: [
    {
      id: 'customer_1',
      name: '蓝越',
      info: '18839100000'
    },
    {
      id: 'customer_2',
      name: 'jeneser',
      info: '18839100000'
    },
  ],
  cart: [
    {
      id: 'customer_1',
      items: [...mockOrderList],
      discounts: [...mockDiscountList]
    },
    {
      id: 'customer_2',
      items: [...mockOrderList.splice(3)],
      discounts: [...mockDiscountList]
    }
  ]
};

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const makeStore = createStore(
  reducer,
  state,
  composeEnhancers()
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export default makeStore;

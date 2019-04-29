import get from 'lodash.get';

export default function reducer(state, action) {
  if (!state) return null;

  switch (action.type) {
    case 'ADD_CUSTOMER': {
      return {
        ...state,
        customer: [action.value, ...state.customer]
      };
    }

    case 'SET_CURRENT_CUSTOMER': {
      return {
        ...state,
        currentCustomer: get(action, 'value', {})
      };
    }

    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import produce from 'immer';
import get from 'lodash.get';
import findindex from 'lodash.findindex';
import uuidv1 from 'uuid/v1';
import * as actionTypes from './actionTypes';

/**
 * customer reducer
 * @param {Array} state
 * @param {Object} action
 */
export const customerReducer = (state = [], action) =>
  produce(state, (draft) => {
    switch (action.type) {
      /**
       * 添加顾客/账单
       */
      case actionTypes.ADD_CUSTOMER: {
        draft.unshift(action.payload);
        break;
      }

      /**
       * 设置当前顾客/账单
       */
      case actionTypes.SET_CURRENT_CUSTOMER: {
        draft.forEach((item, index) => {
          draft[index].isCurrent = item.id === action.payload;
        });
        break;
      }

      /**
       * 删除顾客/账单
       */
      case actionTypes.DELETE_CUSTOMER: {
        const index = findindex(draft, ['id', action.payload]);

        index !== -1 && draft.splice(index, 1);
        break;
      }

      default:
    }
  });

/**
 * cart reducer
 * @param {*} state
 * @param {*} action
 */
export const cartReducer = (state = {}, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      /**
       * 新增购物车商品
       */
      case actionTypes.ADD_PRODUCT_ITEM: {
        const id = get(action, 'payload.id', '');
        const item = {
          ...get(action, 'payload.item', ''),
          // 同一件商品允许添加多次
          // 避免 key 协调问题
          idRorKey: uuidv1()
        };

        if (!draft[id]) {
          draft[id] = {};
          draft[id].items = [];
        }

        draft[id].items.unshift(item);
        break;
      }

      /**
       * 删除顾客/账单
       */
      case actionTypes.DELETE_CUSTOMER: {
        delete draft[action.payload];
        break;
      }

      /**
       * 删除商品
       */
      case actionTypes.DELETE_PRODUCT_ITEM: {
        const customerId = get(action, 'payload.customerId', '');
        const index = findindex(get(draft, `[${customerId}].items`, []), [
          'idRorKey',
          action.payload.itemId
        ]);

        index !== -1 && draft[customerId].items.splice(index, 1);
        break;
      }

      default:
    }
  });

/**
 * gifts reducer
 * @param {Array} state
 * @param {Object} action
 */
export const giftsReducer = (state = {}, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      /**
       * 添加优惠操作
       */
      case actionTypes.HANDLE_GIFTS_SHOW: {
        draft.isShow = action.payload;
        break;
      }

      default:
    }
  });

// root reducer
const rootReducer = combineReducers({
  customer: customerReducer,
  cart: cartReducer,
  gift: giftsReducer
});

export default rootReducer;

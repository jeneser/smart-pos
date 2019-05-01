import React, { useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import Icon from '../common/components/Icon';

import * as actionTypes from '../common/store/actionTypes';
import * as styled from './index.styled';

function PayStatus({ history }) {
  // actions
  const dispatch = useDispatch();

  // 设置当前顾客/账单
  const setCustomer = (id) => {
    dispatch({
      type: actionTypes.SET_CURRENT_CUSTOMER,
      payload: id
    });
  };

  // 添加顾客/账单
  const addCustomer = useCallback(() => {
    const newCustomer = {
      id: uuidv1(),
      name: '自定义账单',
      info: moment().format('hh:mm:ss a'),
      isCurrent: true
    };

    dispatch({
      type: actionTypes.ADD_CUSTOMER,
      payload: newCustomer
    });

    setCustomer(newCustomer.id);

    history.push('/home/cart');
  }, []);

  return (
    <styled.PayStatus>
      {/* head */}
      <styled.Head>
        <Icon
          name="icon_left_black"
          width="0.22"
          height="0.22"
          onClick={() => {
            history.goBack();
          }}
        />

        <styled.Title />
        <Icon
          name="icon_add_black"
          width="0.22"
          height="0.22"
          onClick={addCustomer}
        />
      </styled.Head>
      {/* Body */}
      <styled.Body>
        <styled.StstusBox>
          <Icon name="icon_success_b1" width="0.58" height="0.58" />
          <styled.StatusTex>支付成功</styled.StatusTex>
          <styled.TextLabel>
            总金额 ￥338.00 &nbsp;|&nbsp; 总优惠 ￥0.00
          </styled.TextLabel>
          <styled.Row>
            <styled.Button>
              <Icon name="icon_print_gray" width="0.22" height="0.22" />
              <styled.ButtonText>打印小票</styled.ButtonText>
            </styled.Button>
            <styled.Button>
              <Icon name="icon_add_c_gray" width="0.22" height="0.22" />
              <styled.ButtonText onClick={addCustomer}>
                新增账单
              </styled.ButtonText>
            </styled.Button>
          </styled.Row>
        </styled.StstusBox>
      </styled.Body>
    </styled.PayStatus>
  );
}

export default PayStatus;

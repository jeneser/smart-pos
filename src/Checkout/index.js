import React, { useCallback, useEffect, useState } from 'react';
import { useMappedState } from 'redux-react-hook';
import qrcode from 'qrcode';
import get from 'lodash.get';
import find from 'lodash.find';

import Icon from '../common/components/Icon';
import SaleBlock from '../SaleBlock';

import * as constants from '../common/constants';
import * as styled from './index.styled';

/**
 * 结算
 */
function Checkout({ history }) {
  // 支付链接
  const [orderUrl, setOrderUrl] = useState('');
  // 支付二维码
  const [orderQrImage, setOrderQrImage] = useState('');
  // 支付方式
  const [payMethodsIsShow, setPayMethodsIsShow] = useState(false);
  const [payMethod, setPayMethod] = useState('alipay');

  // map state
  const {
    customerList,
    currentCustomer,
    currentCustomerId,
    cartItems
  } = useMappedState(
    useCallback((state) => {
      const customerList = get(state, 'customer', []);
      // 当前顾客
      const currentCustomer = find(customerList, ['isCurrent', true]) || {};
      // 当前顾客 ID
      const currentCustomerId = get(currentCustomer, 'id', '');

      // 当前购物车
      const currentCart = get(state, `cart[${currentCustomerId}]`, {});
      // 商品
      const cartItems = get(currentCart, 'items', []);

      return {
        customerList,
        currentCustomer,
        currentCustomerId,
        cartItems
      };
    }, [])
  );

  useEffect(() => {
    // 拼接商品参数 ['id_nums']
    const concatProductItems = (items) => {
      const keysObj = {};

      items.forEach((elem) => {
        keysObj[elem.itemId]
          ? keysObj[elem.itemId]++
          : (keysObj[elem.itemId] = 1);
      });

      return Object.keys(keysObj).map((elem) => {
        return `${elem}_${keysObj[elem]}`;
      });
    };

    const params = {
      items: concatProductItems(cartItems)
    };

    const fetchOrderUrl = async () => {
      // TODO: 获取真实订单id逻辑
      const orderId = '10100454001';
      const result = await `http://www.pos.jeneser.wang/miniapp/code/orders/${orderId}`;

      setOrderUrl(result);

      try {
        setOrderQrImage(await qrcode.toDataURL(result, { margin: 0 }));
      } catch (err) {
        // debug, TODO: remove it
        console.error(
          err,
          params,
          orderUrl,
          customerList,
          currentCustomer,
          currentCustomerId
        );
      }
    };

    fetchOrderUrl();
  }, [cartItems]);

  /**
   * 手动触发支付完成
   */
  const handleCompletePay = () => {
    history.push('/paystatus');
  };

  // 自定义税率，应从服务器获取，这里固定为 0
  const taxRate = 0;

  // 总金额
  const amount = cartItems.reduce((acc, cur) => {
    if (cur.itemType === 'item') return acc + parseFloat(cur.itemPrice || 0, 2);
    return 0;
  }, 0);

  // 总折扣
  const discountAmount = cartItems
    .map((item) => {
      if (item.itemType !== 'gift') return 0;

      if (item.itemPrice) return parseFloat(item.itemPrice);

      if (item.discountRate) return amount * parseFloat(1 - item.discountRate);

      return 0;
    })
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  // 实际金额 realAmount = (amount - discountAmount) * (1 - taxRate)
  const realAmount = (
    (parseFloat(amount) - parseFloat(discountAmount) >= 0
      ? parseFloat(amount) - parseFloat(discountAmount)
      : 0) *
    (1 - taxRate)
  ).toFixed(2);

  return (
    <styled.Checkout>
      <SaleBlock
        readonly
        leftButton={
          <Icon
            name="icon_left_black"
            width="0.22"
            height="0.22"
            onClick={() => {
              history.goBack();
            }}
          />
        }
      />

      <styled.Container>
        {/* Head */}
        <styled.Head>
          <styled.Title>结算</styled.Title>
        </styled.Head>

        {/* Body */}
        <styled.Body>
          <styled.Qrbox readonly={payMethod !== 'alipay'}>
            <styled.QrImage source={orderQrImage} />

            <styled.MessageBox>
              <Icon name="icon_success_white" width="0.32" height="0.32" />
              <styled.Tips>亲，请打开支付宝扫描二维码支付</styled.Tips>
            </styled.MessageBox>
          </styled.Qrbox>
        </styled.Body>

        {/* Foot */}
        <styled.Foot>
          <styled.Row>
            <styled.Col>
              <styled.TextLabel>应付金额</styled.TextLabel>
              <styled.TextValue>￥{realAmount}</styled.TextValue>
            </styled.Col>
            <styled.Col>
              <styled.TextLabel>总计优惠</styled.TextLabel>
              <styled.TextValue primary>￥{discountAmount}</styled.TextValue>
            </styled.Col>
          </styled.Row>
          <styled.Row>
            <styled.Button
              onClick={() => setPayMethodsIsShow(!payMethodsIsShow)}
            >
              更换支付方式
            </styled.Button>
            <styled.Button primary onClick={handleCompletePay}>
              完成支付
            </styled.Button>

            {payMethodsIsShow && (
              <styled.PayMethods>
                <styled.PayMethodsHead>支付方式</styled.PayMethodsHead>
                <styled.PayMethodsBody>
                  {constants.payMethods.map((item) => {
                    return (
                      <styled.PayMethodsItem
                        key={item.id}
                        actived={payMethod === item.id}
                        onClick={() => {
                          setPayMethod(item.id);
                          setPayMethodsIsShow(!payMethodsIsShow);
                        }}
                      >
                        <Icon name={item.icon} width="0.42" height="0.42" />
                        {item.text}
                      </styled.PayMethodsItem>
                    );
                  })}
                </styled.PayMethodsBody>
              </styled.PayMethods>
            )}
          </styled.Row>
        </styled.Foot>
      </styled.Container>
    </styled.Checkout>
  );
}

export default Checkout;

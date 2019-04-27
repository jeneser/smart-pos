import React from 'react';
import Icon from '../common/components/Icon';

import SaleBlock from '../SaleBlock';

import * as styled from './index.styled';

function Checkout() {
  return (
    <styled.Checkout>
      <SaleBlock />

      <styled.Container>
        {/* head */}
        <styled.Head>
          <styled.Title>结算</styled.Title>
        </styled.Head>

        <styled.Body />

        <styled.Foot>
          <styled.Row right>
            <styled.Col>
              <styled.TextLabel>应付金额</styled.TextLabel>
              <styled.TextValue>￥286.00</styled.TextValue>
            </styled.Col>
            <styled.Col>

            <styled.TextLabel>总计优惠</styled.TextLabel>
              <styled.TextValue primary>￥26.00</styled.TextValue>
            </styled.Col>
          </styled.Row>
          <styled.Row right>
            <styled.Button>更换支付方式</styled.Button>
            <styled.Button primary>完成支付</styled.Button>
          </styled.Row>
        </styled.Foot>
      </styled.Container>
    </styled.Checkout>
  );
}

export default Checkout;

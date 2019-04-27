import React from 'react';
import Icon from '../common/components/Icon';

import SaleBlock from '../SaleBlock';

import * as styled from './index.styled';

const mockQrImage = require('../common/images/mock_qrcode.png');

function Checkout() {
  return (
    <styled.Checkout>
      <SaleBlock />

      <styled.Container>
        {/* head */}
        <styled.Head>
          <styled.Title>结算</styled.Title>
        </styled.Head>

        <styled.Body>
          <styled.Qrbox>
          <styled.QrImage src={mockQrImage} />

            <styled.MessageBox>
              <Icon name="icon_success_white" width="0.32" height="0.32" />
              <styled.Tips>亲，请打开支付宝扫描二维码支付</styled.Tips>
            </styled.MessageBox>
          </styled.Qrbox>
        </styled.Body>

        <styled.Foot>
          <styled.Row>
            <styled.Col>
              <styled.TextLabel>应付金额</styled.TextLabel>
              <styled.TextValue>￥286.00</styled.TextValue>
            </styled.Col>
            <styled.Col>
              <styled.TextLabel>总计优惠</styled.TextLabel>
              <styled.TextValue primary>￥26.00</styled.TextValue>
            </styled.Col>
          </styled.Row>
          <styled.Row>
            <styled.Button>支付方式</styled.Button>
            <styled.Button primary>完成支付</styled.Button>
          </styled.Row>
        </styled.Foot>
      </styled.Container>
    </styled.Checkout>
  );
}

export default Checkout;

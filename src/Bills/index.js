import React from 'react';
import { Wrapper } from '../Hangup/index.styled';
import * as styled from './index.styled';

import { mockBills } from '../common/mock/bills';

function Bills() {
  const billsList = mockBills;

  return (
    <Wrapper>
      <styled.Table>
        <styled.TableHead>
          <styled.TableHeadCell>订单ID</styled.TableHeadCell>
          <styled.TableHeadCell>交易金额</styled.TableHeadCell>
          <styled.TableHeadCell>交易时间</styled.TableHeadCell>
          <styled.TableHeadCell>支付状态</styled.TableHeadCell>
          <styled.TableHeadCell>提货方式</styled.TableHeadCell>
        </styled.TableHead>
        <styled.TableBody>
          {billsList.map((item) => {
            return (
              <styled.TableRow key={item.billId}>
                <styled.TableCell>{item.billId}</styled.TableCell>
                <styled.TableCell>￥{item.payAmount}</styled.TableCell>
                <styled.TableCell>{item.payTime}</styled.TableCell>
                <styled.TableCell>{item.payStatus}</styled.TableCell>
                <styled.TableCell>{item.shipType}</styled.TableCell>
              </styled.TableRow>
            );
          })}
        </styled.TableBody>
        <styled.TableFoot>
          <styled.Button>加载更多</styled.Button>
        </styled.TableFoot>
      </styled.Table>
    </Wrapper>
  );
}

export default Bills;

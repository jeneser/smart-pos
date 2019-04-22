import React from 'react';
import Icon from '../common/components/Icon';
import { Shelf } from '../Shelf/index.styled';
import * as styled from './index.styled';

const numKeys = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

function Calculator() {
  return (
    <Shelf>
      <styled.InputMonitor>
        <styled.TipText>自定义金额</styled.TipText>
        <styled.AmountText>￥{'123.45'}</styled.AmountText>
      </styled.InputMonitor>
      <styled.Wraper>
        <styled.numLayout>
          {numKeys.map((numKey, index) => (
            <styled.Row key={index}>
              {numKey.map((num) => (
                <styled.keyButton key={String(num)}>{num}</styled.keyButton>
              ))}
            </styled.Row>
          ))}
          <styled.Row>
            <styled.keyButton span={2}>00</styled.keyButton>
            <styled.keyButton>0</styled.keyButton>
          </styled.Row>
        </styled.numLayout>
        <styled.OperatorLayout>
          <styled.KeyOperator>
            <Icon name="icon_left_black" width="0.40" height="0.40" />
          </styled.KeyOperator>
          <styled.KeyOperator>
            <Icon name="icon_add_blue" width="0.40" height="0.40" />
          </styled.KeyOperator>
        </styled.OperatorLayout>
      </styled.Wraper>
    </Shelf>
  );
}

export default Calculator;

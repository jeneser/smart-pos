import styled, { css } from 'styled-components';

const InputMonitor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  padding: 0 0.32rem;
  font-size: 0.36rem;
  letter-spacing: 0.02rem;
  background-color: #fff;
  border: 0.01rem solid #ccc;
`;

const TipText = styled.div`
  color: #ddd;
`;

const AmountText = styled.div`
  color: #333;
`;

const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const keyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.333333%;
  margin-top: 0.04rem;
  margin-right: 0.04rem;
  color: #464646;
  font-size: 0.42rem;
  letter-spacing: 0.05rem;
  background-color: #fff;
  border: 0.01rem solid #ccc;

  ${(props) => {
    if (!props.span) return;

    const width = 33.333333 * props.span;

    return css`
      width: calc(${width}% + 0.04rem);
    `;
  }}

  :active {
    background-color: #f2f2f2;
  }
`;

const numLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const OperatorLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 0.04rem);
`;

const KeyOperator = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 0.04rem;
  background-color: #fff;
  border: 0.01rem solid #ccc;

  :active {
    background-color: #f2f2f2;
  }
`;

export {
  InputMonitor,
  TipText,
  AmountText,
  Wraper,
  keyButton,
  numLayout,
  Row,
  KeyOperator,
  OperatorLayout
};

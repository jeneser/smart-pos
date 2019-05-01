import styled from 'styled-components';
import theme from '../common/styles/theme';
import * as commonStyle from '../common/styles/common';

const PayStatus = styled(commonStyle.container)`
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.15rem 0.2rem;
  width: 100%;
  height: 0.64rem;
  border-bottom: 0.01rem solid ${theme.p5};
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.2rem;
  color: ${theme.p4};
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${theme.p6};
`;

const StstusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.42rem 0.15rem;
  border: 0.01rem solid ${theme.p5};
  background-color: #fff;
  border-radius: 0.04rem;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
`;

const StatusTex = styled.div`
  margin: 0.15rem 0;
  font-size: 0.2rem;
  color: ${theme.b1};
`;

const TextLabel = styled.div`
  font-size: 0.15rem;
  color: ${theme.p9};
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.48rem;
  padding: 0 0.32rem;
  margin: 0 0.15rem;
  border: 0.01rem solid ${theme.p5};
  font-size: 0.16rem;
  color: ${theme.p4};
  border-radius: 0.04rem;

  :active {
    background-color: ${theme.b2};
  }
`;

const ButtonText = styled.div`
  margin-left: 0.05rem;
`;

const Row = styled.div`
  display: flex;
  margin-top: 0.32rem;
`;

export {
  PayStatus,
  Head,
  Title,
  Body,
  StstusBox,
  StatusTex,
  TextLabel,
  Button,
  ButtonText,
  Row
};

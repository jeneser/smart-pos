import styled, { css } from 'styled-components';
import theme from '../common/styles/theme';

const Checkout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 6.44rem;
  border-left: 0.01rem solid ${theme.p5};
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.15rem 0.2rem;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Foot = styled.div`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  right: 0;
  padding: 0 0.4rem;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  :not(:last-child) {
    margin-bottom: 0.3rem;
  }
`;

const Col = styled.div`
  padding: 0 0.32rem;

  :not(:last-child) {
    border-right: 0.01rem solid ${theme.p5};
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.48rem;
  margin: 0 0.2rem;
  height: 0.48rem;
  min-width: 1.8rem;
  font-size: 0.16rem;
  color: ${theme.p4};
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.06rem;

  ${(props) =>
    props.primary &&
    css`
      color: #fff;
      background-color: ${theme.p2};
      box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
    `}
`;

const TextLabel = styled.div`
  font-size: 0.13rem;
  color: ${theme.p9};
`;

const TextValue = styled.div`
  margin-top: 0.05rem;
  font-size: 0.28rem;
  color: ${theme.p4};
  font-weight: bold;

  ${(props) =>
    props.primary &&
    css`
      color: ${theme.b1};
    `}
`;

const Qrbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.58rem 0;
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.06rem;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);

  ${props => props.readonly && css`
    opacity: 0.5;
  `}
`;

const QrImage = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0.32rem;
  background-size: 2rem 2rem;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.source &&
    css`
      background-image: url(${props.source});
    `}
`;

const MessageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 0.8rem;
  padding: 0 0.32rem;
  font-size: 0.17rem;
  color: #fff;
  background-color: ${theme.b1};
`;

const Tips = styled.div`
  margin-left: 0.1rem;
`;

const PayMethods = styled.div`
  position: absolute;
  top: -2.3rem;
  left: 0.4rem;
  border: 0.01rem solid ${theme.p5};
  font-size: 0.2rem;
  background-color: #fff;
  border-radius: 0.04rem;
  box-shadow: 0.02rem 0.02rem 0.1rem rgba(0, 0, 0, 0.1);

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 100%;
  }

  ::before {
    border: 0.13rem solid transparent;
    border-top-color: #fff;
    left: 50%;
    margin-left: -0.13rem;
  }

  ::after {
    border: 0.14rem solid transparent;
    border-top-color: ${theme.p5};
    left: 50%;
    margin-left: -0.14rem;
    z-index: -1;
  }
`;

const PayMethodsHead = styled(Head)`
  align-items: center;
  justify-content: center;
  height: 0.52rem;
  font-size: 0.17rem;
`;

const PayMethodsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.24rem 0.2rem;
`;

const PayMethodsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
  width: 1rem;
  padding: 0.15rem 0;
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;
  font-size: 0.14rem;

  :nth-child(2n - 1) {
    margin-right: 0.2rem;
  }

  ${(props) =>
    props.actived &&
    css`
      background-color: rgba(0, 207, 63, 0.1);
      border-color: ${theme.b1};
    `}
`;

export {
  Checkout,
  Container,
  Head,
  Title,
  Body,
  Qrbox,
  QrImage,
  MessageBox,
  Tips,
  Foot,
  Row,
  Col,
  Button,
  TextLabel,
  TextValue,
  PayMethods,
  PayMethodsHead,
  PayMethodsBody,
  PayMethodsItem
};

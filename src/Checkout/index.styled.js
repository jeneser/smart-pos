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

const Body = styled.div``;

const Foot = styled.div`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  right: 0;
  padding: 0 0.4rem;
`;

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `}

  :not(:last-child) {
    margin-bottom: 0.24rem;
  }
`;

const Col = styled.div`
  padding: 0 0.32rem;

  :not(:last-child) {
    border-right: 0.01rem solid ${theme.p5};
  }

  :last-child {
    padding-right: 0;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.4rem;
  margin-left: 0.24rem;
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

export {
  Checkout,
  Container,
  Head,
  Title,
  Body,
  Foot,
  Row,
  Col,
  Button,
  TextLabel,
  TextValue
};

import styled, { css } from 'styled-components';
import Icon from '../common/components/Icon';
import theme from '../common/styles/theme';

const LoginBox = styled.div`
  background-color: #fff;
  border-radius: 0.04rem;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
`;

const BoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.6rem;
  padding: 0 0.24rem;
  font-size: 0.18rem;
  color: ${theme.p4};
  border-bottom: 0.01rem solid ${theme.p5};
`;

const BoxBody = styled.div`
  padding: 0.28rem 0.24rem;
`;

const InputLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 0.54rem;
  margin-bottom: 0.24rem;
`;

const Input = styled.input`
  display: flex;
  align-self: stretch;
  flex-grow: 1;
  padding: 0.1rem 0.2rem 0.1rem 0.42rem;
  font-size: 0.16rem;
  outline: none;
  border: none;
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;

  ::placeholder {
    color: ${theme.p5};
  }

  :-webkit-autofill,
  :-webkit-autofill:focus {
    background-color: none;
  }
`;

const EnhanceIcon = styled(Icon)`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-51%);

  ${(props) =>
    props.left &&
    css`
      left: 0.15rem;
    `}

  ${(props) =>
    props.right &&
    css`
      right: 0;
    `}
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 0.54rem;
  margin-top: 0.2rem;
  color: ${theme.p4};
  font-size: 0.18rem;
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;

  :active {
    opacity: 0.8;
  }

  ${(props) =>
    props.primary &&
    css`
      color: #fff;
      background-color: ${theme.p2};
    `}
`;

export { LoginBox, BoxHead, BoxBody, InputLabel, Input, EnhanceIcon, Button };

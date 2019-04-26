import styled, { css } from 'styled-components';
import Icon from '../common/components/Icon';

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0 auto;
  width: 50%;
  align-self: center;
`;

const Input = styled.input`
  display: flex;
  align-self: stretch;
  flex-grow: 1;
  padding: 0.24rem 0.42rem 0.2rem 0.6rem;
  font-size: 0.24rem;
  outline: none;
  border: none;
  border-bottom: 0.02rem solid #eee;

  ::placeholder {
    color: #aaa;
  }

  :-webkit-autofill,
  :-webkit-autofill:focus {
    background-color: none;
  }
`;

const UsernameInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 0.9rem;
  margin-bottom: 0.24rem;
`;

const PasswordInput = styled.div`
  position: relative;
  display: flex;
  height: 0.9rem;
  margin-bottom: 0.24rem;
`;

const EnhanceIcon = styled(Icon)`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);

  ${(props) =>
    props.left &&
    css`
      left: 0;
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
  width: 100%;
  height: 0.8rem;
  margin-top: 0.2rem;
  color: #2997cc;
  font-size: 0.26rem;
  border: 0.01rem solid #2997cc;

  :active {
    color: #fff;
    background-color: #2997cc;
  }
`;

const TipText = styled.p`
margin-top: 0.4rem;
  font-size: 0.18rem;
  color: #999;
`;

export {
  // Wrapper,
  LoginBox,
  Input,
  UsernameInput,
  PasswordInput,
  EnhanceIcon,
  Button,
  TipText
};

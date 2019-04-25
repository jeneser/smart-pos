import React from 'react';
import { Container, HeaderBar } from '../Analysis/index.styled';

import * as styled from './index.styled';

function Login() {
  return (
    <Container>
      <HeaderBar>用户登陆</HeaderBar>
      <styled.LoginBox>
        <styled.UsernameInput>
          <styled.EnhanceIcon
            name="icon_user_black"
            width="0.32"
            height="0.32"
            left
          />
          <styled.EnhanceIcon
            name="icon_error_c_gray"
            width="0.24"
            height="0.24"
            right
          />
          <styled.Input placeholder="输入用户名" />
        </styled.UsernameInput>
        <styled.PasswordInput>
          <styled.EnhanceIcon
            name="icon_password_black"
            width="0.32"
            height="0.32"
            left
          />
          <styled.EnhanceIcon
            name="icon_eye_gray"
            width="0.30"
            height="0.30"
            right
          />
          <styled.Input placeholder="输入密码" type="password" />
        </styled.PasswordInput>
        <styled.Button>立即登陆</styled.Button>
        <styled.TipText>登陆遇到问题？</styled.TipText>
      </styled.LoginBox>
    </Container>
  );
}

export default Login;

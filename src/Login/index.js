import React from 'react';
import Icon from '../common/components/Icon';

import * as styled from './index.styled';

/**
 * @param  {{handleClose: Function}} props
 */
function Login({ handleClose }) {
  return (
    <styled.LoginBox>
      <styled.BoxHead>
        登陆
        <Icon
          name="icon_close_black"
          width="0.20"
          height="0.20"
          onClick={handleClose}
        />
      </styled.BoxHead>
      <styled.BoxBody>
        <styled.InputLabel>
          <styled.EnhanceIcon
            name="icon_user_black"
            width="0.20"
            height="0.20"
            left
          />
          <styled.Input placeholder="输入用户名" />
        </styled.InputLabel>

        <styled.InputLabel>
          <styled.EnhanceIcon
            name="icon_password_black"
            width="0.20"
            height="0.20"
            left
          />
          <styled.Input placeholder="输入密码" type="password" />
        </styled.InputLabel>

        <styled.Button primary>立即登陆</styled.Button>
      </styled.BoxBody>
    </styled.LoginBox>
  );
}

export default Login;

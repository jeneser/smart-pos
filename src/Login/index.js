import React, { useState, useCallback } from 'react';
import Icon from '../common/components/Icon';
import { toast } from '../common/components/Toastify';
import request, { baseURL } from '../common/api/request';
import { useDispatch } from 'redux-react-hook';
import ls from 'local-storage';

import * as actionTypes from '../common/store/actionTypes';
import * as styled from './index.styled';

/**
 * 用户登陆
 * @param  {{handleClose: Function}} props
 */
function Login({ handleClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // actions
  const dispatch = useDispatch();

  const handleLoginAction = useCallback(() => {
    /**
     * 获取数据
     */
    const fetchData = async () => {
      // verification
      if (!username || !password) return;

      try {
        const url = `${baseURL}/auth/login`;
        const params = { username, password };
        const result =
          (await request({ method: 'post', data: params, url })) || {};

        dispatch({
          type: actionTypes.USER_LOGIN,
          payload: {
            username: result.username,
            admin: result.admin
          }
        });

        handleClose();

        ls.set('username', result.username);
        ls.set('admin', result.admin);

        toast.success('登陆成功!');
      } catch (e) {
        toast.warn('登陆异常，请重试！');
      }
    };

    fetchData();
  }, [username, password]);

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
          <styled.Input
            value={username}
            placeholder="输入用户名"
            onChange={(e) => setUsername(e.target.value)}
          />
        </styled.InputLabel>

        <styled.InputLabel>
          <styled.EnhanceIcon
            name="icon_password_black"
            width="0.20"
            height="0.20"
            left
          />
          <styled.Input
            value={password}
            placeholder="输入密码"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </styled.InputLabel>

        <styled.Button primary onClick={handleLoginAction}>
          立即登陆
        </styled.Button>
      </styled.BoxBody>
    </styled.LoginBox>
  );
}

export default Login;

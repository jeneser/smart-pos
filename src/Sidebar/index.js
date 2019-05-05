import React, { Fragment, useState, useCallback, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useMappedState } from 'redux-react-hook';
import Login from '../Login';
import Icon from '../common/components/Icon';
import request, { baseURL } from '../common/api/request';
import { toast } from '../common/components/Toastify';
import ls from 'local-storage';
import theme from '../common/styles/theme';

import * as actionTypes from '../common/store/actionTypes';
import * as constants from '../common/constants';
import * as styled from './index.styled';

Modal.setAppElement('#root');

const activeStyle = {
  backgroundColor: theme.p2
};

/**
 * 侧边导航
 */
function Sidebar() {
  const [sidebarIsShow, setSidebarIsShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // map state
  const { user } = useMappedState(
    useCallback((state) => {
      const user = state.user;

      return { user };
    }, [])
  );

  // actions
  const dispatch = useDispatch();

  useEffect(() => {
    const username = ls.get('username');
    const admin = ls.get('admin');

    if (!username) return;

    dispatch({
      type: actionTypes.USER_LOGIN,
      payload: {
        username,
        admin
      }
    });
  }, []);

  const handleLogoutAction = useCallback(() => {
    /**
     * 获取数据
     */
    const fetchData = async () => {
      if (!user.username) return;

      try {
        const url = `${baseURL}/auth/logout`;

        await request({ url });

        dispatch({
          type: actionTypes.USER_LOGOUT
        });

        ls.set('username', '');
        ls.set('admin', '');

        toast.success('注销成功!');
      } catch (e) {
        toast.warn('注销异常，请重试！');
      }
    };

    fetchData();
  }, [user]);

  const handleShowSidebar = (e) => {
    if (e.target && e.target.id === 'jSidebarExpand') return;

    setSidebarIsShow(!sidebarIsShow);
  };

  /**
   * 变更输入方式
   */
  const changeSaleInputMethod = (method) => {
    dispatch({
      type: actionTypes.CHANGE_INPUT_METHOD,
      payload: method
    });
  };

  return (
    <Fragment>
      {/* Sidebar */}
      <styled.Sidebar>
        <styled.MenuItem
          bottomBorder
          bottomMargin
          height="0.64"
          flexEnd
          onClick={handleShowSidebar}
        >
          <Icon name="icon_menu_black" width="0.24" height="0.24" />
        </styled.MenuItem>

        {constants.navConfig.map((item) => {
          return (
            <styled.MenuItemLink
              to={item.path}
              activeStyle={activeStyle}
              key={item.path}
            >
              <Icon name={item.iconName} width="0.24" height="0.24" />
            </styled.MenuItemLink>
          );
        })}

        <styled.MenuItem bottom onClick={handleLogoutAction}>
          <Icon name="icon_user_gray" width="0.24" height="0.24" />
        </styled.MenuItem>
      </styled.Sidebar>

      <styled.MaskContainer isShow={sidebarIsShow} onClick={handleShowSidebar}>
        {/* SidebarExpand */}
        <styled.SidebarExpand id="jSidebarExpand">
          {/* UserBlock */}
          <styled.UserBlock
            onClick={() => {
              !user.username && setModalIsOpen(true);
              changeSaleInputMethod('manual');
            }}
          >
            <styled.Avatar
              src={
                'https://avatars2.githubusercontent.com/u/15034042?s=460&v=4'
              }
            />
            <styled.UserInfo>
              <styled.UserNick>
                {user.username ? user.username : '请登陆'}
              </styled.UserNick>
              <styled.UserDesc>
                {user.admin ? '管理员' : user.username && '导购'}
              </styled.UserDesc>
            </styled.UserInfo>
            <Icon name="icon_down_gray" width="0.18" height="0.18" />
          </styled.UserBlock>

          {/* NavItem */}
          {constants.navConfig.map((item) => {
            return (
              <styled.NavItemLink
                to={item.path}
                activeStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  color: '#fff'
                }}
                key={item.name}
              >
                <Icon name={item.iconName} width="0.22" height="0.22" />
                <styled.NavText>{item.name}</styled.NavText>
              </styled.NavItemLink>
            );
          })}

          <styled.NavItem bottom>
            <Icon name="icon_user_gray" width="0.22" height="0.22" />
            <styled.NavText onClick={handleLogoutAction}>
              注销登陆
            </styled.NavText>
          </styled.NavItem>
        </styled.SidebarExpand>
      </styled.MaskContainer>

      <Modal
        isOpen={modalIsOpen}
        style={{ ...styled.modalStyle }}
        onRequestClose={() => {
          setModalIsOpen(false);
          changeSaleInputMethod('barcode');
        }}
      >
        <Login
          handleClose={() => {
            setModalIsOpen(false);
            changeSaleInputMethod('barcode');
          }}
        />
      </Modal>
    </Fragment>
  );
}

export default Sidebar;

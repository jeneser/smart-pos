import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';
import Login from '../Login';
import Icon from '../common/components/Icon';

import theme from '../common/styles/theme';
import * as styled from './index.styled';

Modal.setAppElement('#root');

const navConfig = [
  {
    path: '/checkout',
    name: '结算收款',
    iconName: 'icon_shopping_cart_gray'
  },
  {
    path: '/home/cart',
    name: '当前账单',
    iconName: 'icon_list_gray'
  },
  {
    path: '/home/orders',
    name: '历史账单',
    iconName: 'icon_analysis_gray'
  },
  {
    path: '/configuration',
    name: '用户设置',
    iconName: 'icon_setting_gray'
  }
];

const activeStyle = {
  backgroundColor: theme.p2
};

function Sidebar() {
  const [sidebarIsShow, setSidebarIsShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShowSidebar = (e) => {
    if (e.target && e.target.id === 'jSidebarExpand') return;

    setSidebarIsShow(!sidebarIsShow);
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

        {navConfig.map((item) => {
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

        <styled.MenuItem bottom>
          <Icon name="icon_user_gray" width="0.24" height="0.24" />
        </styled.MenuItem>
      </styled.Sidebar>

      <styled.MaskContainer isShow={sidebarIsShow} onClick={handleShowSidebar}>
        {/* SidebarExpand */}
        <styled.SidebarExpand id="jSidebarExpand">
          {/* UserBlock */}
          <styled.UserBlock onClick={() => setModalIsOpen(true)}>
            <styled.Avatar
              src={
                'https://avatars2.githubusercontent.com/u/15034042?s=460&v=4'
              }
            />
            <styled.UserInfo>
              <styled.UserNick>Jeneser wg</styled.UserNick>
              <styled.UserDesc>导购人员</styled.UserDesc>
            </styled.UserInfo>
            <Icon name="icon_down_gray" width="0.18" height="0.18" />
          </styled.UserBlock>

          {/* NavItem */}
          {navConfig.map((item) => {
            return (
              <styled.NavItemLink
                to={item.path}
                activeStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.2)'
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
            <styled.NavText>注销登陆</styled.NavText>
          </styled.NavItem>
        </styled.SidebarExpand>
      </styled.MaskContainer>

      <Modal
        isOpen={modalIsOpen}
        style={{ ...styled.modalStyle }}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <Login
          handleClose={() => {
            setModalIsOpen(false);
          }}
        />
      </Modal>
    </Fragment>
  );
}

export default Sidebar;

import React from 'react';
import Icon from '../common/components/Icon';
import * as styled from './index.styled';

const navConfig = [
  {
    path: 'analysis',
    name: '报表分析',
    iconName: 'icon_analysis_c_white'
  },
  {
    path: 'hangup',
    name: '挂起的账单',
    iconName: 'icon_waitinvoice_white'
  },
  {
    path: 'bills',
    name: '历史账单',
    iconName: 'icon_historyorder_white'
  },
  {
    path: 'queryItem',
    name: '库存查询',
    iconName: 'icon_listtask_white'
  },
  {
    path: 'configuration',
    name: '设置',
    iconName: 'icon_config_white'
  }
];
const baseUrl = '/dashboard';

const activeStyle = {
  backgroundColor: '#2a2f33'
};

const userAvatar =
  'https://avatars2.githubusercontent.com/u/15034042?s=460&v=4';

/**
 * Sidebar
 * @param {{isShow: Boolean, handleSidebar: Function}} props
 */
function Sidebar({ isShow, handleSidebar }) {
  return (
    isShow && (
      <styled.Sidebar onClick={handleSidebar}>
        {/* UserBlock */}
        {/* <styled.UserBlock to={`${baseUrl}/login`}> */}
        {/* Avatar */}
        {/* <styled.Avatar src={userAvatar} /> */}
        {/* UserInfo */}
        {/* <styled.UserInfo>
            <styled.UserNick>帅气的Jeneser</styled.UserNick>
            <styled.UserDesc>
              <styled.RoleTag>店长</styled.RoleTag>
              <styled.RoleTag>管理员</styled.RoleTag>
            </styled.UserDesc>
          </styled.UserInfo>
          <Icon name="icon_right_gray" width="0.3" height="0.3" /> */}
        {/* </styled.UserBlock> */}

        {/* NavItem */}
        {navConfig.map((navItem) => {
          return (
            <styled.NavItem
              to={`${baseUrl}/${navItem.path}`}
              activeStyle={activeStyle}
              key={navItem.name}
            >
              <Icon name={navItem.iconName} width="0.24" height="0.24" />
              <styled.NavText>{navItem.name}</styled.NavText>
              <Icon name="icon_right_gray" width="0.18" height="0.18" />
            </styled.NavItem>
          );
        })}
      </styled.Sidebar>
    )
  );
}

export default Sidebar;

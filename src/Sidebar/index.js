import React from 'react';
import Icon from '../common/components/Icon';

import theme from '../common/styles/theme';
import * as styled from './index.styled';

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

const userAvatar =
  'https://avatars2.githubusercontent.com/u/15034042?s=460&v=4';

function Sidebar() {
  return (
    <styled.Sidebar>
      <styled.MenuItem bottomBorder bottomMargin height="0.64" flexEnd>
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
  );

  // return (
  //   isShow && (
  //     <styled.Sidebar onClick={handleSidebar}>
  //       {/* UserBlock */}
  //       {/* <styled.UserBlock to={`${baseUrl}/login`}> */}
  //       {/* Avatar */}
  //       {/* <styled.Avatar src={userAvatar} /> */}
  //       {/* UserInfo */}
  //       {/* <styled.UserInfo>
  //           <styled.UserNick>帅气的Jeneser</styled.UserNick>
  //           <styled.UserDesc>
  //             <styled.RoleTag>店长</styled.RoleTag>
  //             <styled.RoleTag>管理员</styled.RoleTag>
  //           </styled.UserDesc>
  //         </styled.UserInfo>
  //         <Icon name="icon_right_gray" width="0.3" height="0.3" /> */}
  //       {/* </styled.UserBlock> */}

  //       {/* NavItem */}
  //       {navConfig.map((navItem) => {
  //         return (
  //           <styled.NavItem
  //             to={`${baseUrl}/${navItem.path}`}
  //             activeStyle={activeStyle}
  //             key={navItem.name}
  //           >
  //             <Icon name={navItem.iconName} width="0.24" height="0.24" />
  //             <styled.NavText>{navItem.name}</styled.NavText>
  //             <Icon name="icon_right_gray" width="0.18" height="0.18" />
  //           </styled.NavItem>
  //         );
  //       })}
  //     </styled.Sidebar>
  //   )
  // );
}

export default Sidebar;

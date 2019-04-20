/**
 * @file 导航条
 */

import React from 'react';
import Icon from '../common/components/Icon';

import * as styled from './index.styled';

const activeStyle = {
  backgroundColor: '#2A2F33'
};

function NavBar() {
  return (
    <styled.NavBar>
      <styled.NavItem to="/dashboard" activeStyle={activeStyle} width="10">
        <Icon name="icon_menu_white" width="0.32" height="0.32" />
      </styled.NavItem>
      <styled.NavItem to="/home/shelfOne" activeStyle={activeStyle}>
        服饰上新
      </styled.NavItem>
      <styled.NavItem to="/home/shelfTwo" activeStyle={activeStyle}>
        热销鞋帽
      </styled.NavItem>
      <styled.NavItem to="/home/shelfThree" activeStyle={activeStyle}>
        配饰挂件
      </styled.NavItem>
      <styled.NavItem to="/home/products" activeStyle={activeStyle}>
        <Icon name="icon_query_list_white" width="0.30" height="0.30" />
      </styled.NavItem>
      <styled.NavItem to="/calculator" activeStyle={activeStyle}>
        <Icon name="icon_calculator_white" width="0.32" height="0.32" />
      </styled.NavItem>
    </styled.NavBar>
  );
}

export default NavBar;

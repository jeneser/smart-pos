/**
 * @file 导航条
 */

import React, { useState } from 'react';
import Icon from '../common/components/Icon';

import * as styled from './index.styled';

const activeStyle = {
  backgroundColor: '#2A2F33'
};

/**
 * NavBar
 * @param {{handleSidebar: Function}} props
 */
function NavBar({ handleSidebar }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <styled.NavBar>
      <styled.NavItemBase
        width="10"
        onClick={() => {
          setIsClicked(!isClicked);
          handleSidebar(isClicked);
        }}
      >
        <Icon name="icon_menu_white" width="0.30" height="0.30" />
      </styled.NavItemBase>
      <styled.NavItem to="/home/shelf/one" activeStyle={activeStyle}>
        服饰上新
      </styled.NavItem>
      <styled.NavItem to="/home/shelf/two" activeStyle={activeStyle}>
        热销鞋帽
      </styled.NavItem>
      <styled.NavItem to="/home/shelf/three" activeStyle={activeStyle}>
        配饰挂件
      </styled.NavItem>
      <styled.NavItem to="/home/products" activeStyle={activeStyle}>
        <Icon name="icon_query_list_white" width="0.28" height="0.28" />
      </styled.NavItem>
      <styled.NavItem to="/home/calculator" activeStyle={activeStyle}>
        <Icon name="icon_calculator_white" width="0.30" height="0.30" />
      </styled.NavItem>
    </styled.NavBar>
  );
}

export default NavBar;

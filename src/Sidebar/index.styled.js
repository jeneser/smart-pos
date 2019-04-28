import styled, { css } from 'styled-components';
import * as commonStyle from '../common/styles/common';
import theme from '../common/styles/theme';
import { NavLink } from 'react-router-dom';

const Sidebar = styled.div`
  position: relative;
  width: 0.68rem;
  height: 100vh;
  font-size: 0.2rem;
  border-right: 0.01rem solid ${theme.p5};
`;

const MenuItemBase = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.68rem;
  height: 0.68rem;
  text-decoration: none;

  :active {
    background-color: ${theme.p2};
  }
`;

const MenuItem = styled.div`
  ${MenuItemBase}

  ${(props) =>
    props.flexEnd &&
    css`
      padding: 0.15rem 0;
      align-items: flex-end;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height}rem;
    `}

  ${(props) =>
    props.bottomBorder &&
    css`
      border-bottom: 0.01rem solid ${theme.p5};
    `}

  ${(props) =>
    props.bottomMargin &&
    css`
      margin-bottom: 0.5rem;
    `}

  ${(props) =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
    `}
`;

const MenuItemLink = styled(NavLink)`
  ${MenuItemBase}
`;

const MaskContainer = styled(commonStyle.container)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${props => !props.isShow && css`
    display: none;
  `}
`;

const SidebarExpand = styled.div`
  position: relative;
  width: 3rem;
  height: 100vh;
  background-color: ${theme.p4};
`;

const UserBlock = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.24rem;
  margin-bottom: 0.2rem;
  color: #fff;
  text-decoration: none;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);

  :active {
    background-color: #2a2f33;
  }
`;

const Avatar = styled.img`
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 100%;
  background-color: ${theme.p9};
  border: 0.01rem solid ${theme.p5};
`;

const UserInfo = styled.div`
  flex: 1;
  margin-left: 0.2rem;
`;

const UserNick = styled.div`
  font-size: 0.18rem;
  color: #fff;
`;

const UserDesc = styled.div`
  font-size: 0.13rem;
  margin-top: 0.05rem;
  color: ${theme.p5};
`;

const NavItemBase = `
  display: flex;
  align-items: center;
  height: 0.9rem;
  padding: 0 0.34rem;
  color: #fff;
  text-decoration: none;
`;

const NavItem = styled.div`
  ${NavItemBase}

  ${(props) =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    `}
`;

const NavItemLink = styled(NavLink)`
  ${NavItemBase}
`;

const NavText = styled.div`
  flex: 1;
  margin-left: 0.18rem;
  font-size: 0.18rem;
`;

export {
  Sidebar,
  MenuItem,
  MenuItemLink,
  MaskContainer,
  SidebarExpand,
  UserBlock,
  Avatar,
  UserInfo,
  UserNick,
  UserDesc,
  NavItem,
  NavItemLink,
  NavText
};

// const Sidebar = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 42%;
//   height: 100vh;
//   background-color: #3d454c;
// `;

// const RoleTag = styled.div`
//   margin-right: 0.12rem;
//   padding: 0.01rem 0.04rem;
//   font-size: 0.18rem;
//   color: #999;
//   border: 0.01rem solid #ccc;
// `;

// export {
//   // Sidebar
//   // UserBlock,
//   // Avatar,
//   // UserInfo,
//   // UserNick,
//   // UserDesc,
//   // RoleTag,
//   // NavItem,
//   // NavText
// };

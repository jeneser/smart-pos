import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Sidebar = styled.div`
  width: 33.333334%;
  border-right: 0.02rem solid #ccc;
`;

const UserBlock = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 1.2rem;
  padding: 0 0.24rem;
  color: #000;
  border-bottom: 0.01rem solid #ccc;
  text-decoration: none;

  :active {
    background-color: #f2f2f2;
  }
`;

const Avatar = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 100%;
  background-color: #ccc;
  border: 0.01rem solid #ccc;
`;

const UserInfo = styled.div`
  flex: 1;
  margin-left: 0.2rem;
`;

const UserNick = styled.div`
  font-size: 0.24rem;
`;

const UserDesc = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.1rem;
`;

const RoleTag = styled.div`
  margin-right: 0.12rem;
  padding: 0.01rem 0.04rem;
  font-size: 0.2rem;
  color: #999;
  border: 0.01rem solid #ccc;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 1rem;
  padding: 0 0.24rem;
  color: #000;
  border-bottom: 0.01rem solid #eee;
  text-decoration: none;

  :active {
    background-color: #f2f2f2;
  }
`;

const NavText = styled.div`
  flex: 1;
  margin-left: 0.24rem;
  font-size: 0.24rem;
`;

export {
  Sidebar,
  UserBlock,
  Avatar,
  UserInfo,
  UserNick,
  UserDesc,
  RoleTag,
  NavItem,
  NavText
};

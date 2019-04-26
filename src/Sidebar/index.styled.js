import styled, { css } from 'styled-components';
import theme from '../common/styles/theme';
import { NavLink } from 'react-router-dom';

const Sidebar = styled.div`
  position: relative;
  width: 0.9rem;
  height: 100vh;
  font-size: 0.2rem;
  border-right: 0.01rem solid ${theme.p5};
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.9rem;
  height: 0.9rem;

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
    props.topMargin &&
    css`
      margin-top: 0.5rem;
    `}

  ${(props) =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
    `}

  :active {
    background-color: ${theme.p2};
  }
`;

export { Sidebar, MenuItem };

// const Sidebar = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 42%;
//   height: 100vh;
//   background-color: #3d454c;
// `;

// const UserBlock = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   height: 1.2rem;
//   padding: 0 0.24rem;
//   color: #fff;
//   /* border-bottom: 0.01rem solid #ccc; */
//   text-decoration: none;

//   :active {
//     background-color: #2a2f33;
//   }
// `;

// const Avatar = styled.img`
//   width: 0.8rem;
//   height: 0.8rem;
//   border-radius: 100%;
//   background-color: #ccc;
//   border: 0.01rem solid #ccc;
// `;

// const UserInfo = styled.div`
//   flex: 1;
//   margin-left: 0.2rem;
// `;

// const UserNick = styled.div`
//   font-size: 0.24rem;
// `;

// const UserDesc = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   margin-top: 0.1rem;
// `;

// const RoleTag = styled.div`
//   margin-right: 0.12rem;
//   padding: 0.01rem 0.04rem;
//   font-size: 0.18rem;
//   color: #999;
//   border: 0.01rem solid #ccc;
// `;

// const NavItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   height: 1rem;
//   padding: 0 0.4rem;
//   color: #fff;
//   /* border-bottom: 0.01rem solid #eee; */
//   text-decoration: none;
// `;

// const NavText = styled.div`
//   flex: 1;
//   margin-left: 0.24rem;
//   font-size: 0.2rem;
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

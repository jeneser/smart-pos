import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 0.8rem;
  text-align: center;
  background-color: #3d454c;
`;

const NavItemBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.20rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  width: ${(props) => (props.width ? props.width + '%' : '18%')};

  :active {
    background-color: #2a2f33;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.20rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  width: ${(props) => (props.width ? props.width + '%' : '18%')};

  :active {
    background-color: #2a2f33;
  }
`;

export { NavBar, NavItemBase, NavItem };

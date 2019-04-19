import styled, { css } from 'styled-components';
import IMG from '../common/images/download.jpeg';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
`;

const Shelf = styled.div`
  width: 66.666666%;
  height: calc(100vh - 0.8rem);
  padding: 0.2rem;
  background-color: #f2f4f5;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const Col = styled.div`
  width: 20%;
  background-color: #f2f4f5;
  border: solid 1px #ccc;
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 1.648rem;
  height: 1.648rem;
  font-size: 0.2rem;
  background-color: #ededed;
  border: solid 1px #ccc;
`;

const Image = styled.img`
  width: 1.648rem;
  height: 1.248rem;
  background-image: url(${IMG});
  background-size: 1.648rem 1.248rem;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  padding: 0 0.05rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// NavBar
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.8rem;
  background-color: #3d454c;
`;

const NavItem = styled.div`
  font-size: 0.24rem;
  line-height: 0.8rem;
  color: #fff;

  width: ${(props) => (props.width ? props.width + '%' : '18%')};
  background-color: ${(props) => (props.active ? '#2A2F33' : '')};
`;

// SaleBlock
const SaleBlock = styled.div`
  position: relative;
  width: 33.333334%;
  height: calc(100vh - 0.8rem);
  background-color: #fff;
  border-left: 0.02rem solid #ccc;
  box-shadow: -0.04px 0 0.1px rgba(255, 255, 255, 0.1);
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  line-height: 0.8rem;
  font-size: 0.26rem;
  border-bottom: 0.01rem solid #999;
`;

const Foot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0.8rem;
  font-size: 0.26rem;
  color: #fff;
  background-color: #2997cc;
`;

const List = styled.div`
  padding: 0.2rem 0.2rem 0 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 0.2rem;
  color: #000;
  padding: 0.2rem 0;

  ${(props) =>
    props.borderTop
      ? css`
          margin-top: 0.1rem;
          border-top: 1px solid #ccc;
        `
      : ''}
`;

const ProductDesc = styled.div``;

const ProductPrice = styled.div``;

export {
  Wrapper,
  Shelf,
  SaleBlock,
  NavBar,
  Row,
  Col,
  Card,
  Image,
  Text,
  NavItem,
  Head,
  Foot,
  List,
  ListItem,
  ProductDesc,
  ProductPrice
};

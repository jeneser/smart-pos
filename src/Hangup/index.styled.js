import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 0.8rem);
  overflow-y: scroll;
  padding-top: 0.4rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
  margin-bottom: 0.4rem;
  padding: 0 0.34rem;
`;

const Card = styled.div`
  position: relative;
  width: 48%;
  height: 100%;
  border: 0.01rem solid #ccc;
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  height: 0.6rem;
  padding: 0 0.24rem;
  font-size: 0.22rem;
  border-bottom: 0.01rem solid #ccc;
`;

const CardBody = styled.div`
  height: calc(100% - 0.6rem - 0.6rem);
  padding: 0.1rem 0.24rem 0 0.24rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CardFoot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: 0.6rem;
  background-color: #fff;
  padding: 0 0.24rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.42rem;
  /* width: 30%; */
  font-size: 0.2rem;
  /* padding: 0.05rem 0.4rem; */
  padding: 0.02rem 0.3rem;
  border: 0.01rem solid #ccc;

  ${(props) =>
    props.primary &&
    css`
      color: #2997cc;
      border-color: #2997cc;
      :active {
        color: #fff;
        background-color: #2997cc;
      }
    `}

  ${(props) =>
    props.warn &&
    css`
      color: #ff4949;
      border-color: #ff4949;
      :active {
        color: #fff;
        background-color: #ff4949;
      }
    `}
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.2rem;
  color: #000;
  padding: 0.2rem 0;
  /* margin-bottom: 0.1rem; */

  ${(props) =>
    props.borderTop
      ? css`
          margin-top: 0.1rem;
          border-top: 1px solid #ccc;
        `
      : ''}

  :active {
    background-color: #f2f2f2;
  }
`;

const Image = styled.img`
  max-width: 0.64rem;
  width: 100%;
  height: 0.64rem;
  margin-right: 0.2rem;
  background-color: #eee;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 0.64rem;
`;

const ItemTitle = styled.div`
  width: 62.5%;
  font-size: 0.22rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemDesc = styled.div`
  display: flex;
  font-size: 0.2rem;
  color: #666;
`;

const ItemPrice = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.2rem;
  font-size: 0.22rem;
  color: #666;
`;

export {
  Wrapper,
  Row,
  Card,
  CardHead,
  CardBody,
  CardFoot,
  Button,
  ListItem,
  Image,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  ItemPrice
};

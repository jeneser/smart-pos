import styled, { css } from 'styled-components';
import Icon from '../common/components/Icon';

const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  /* width: 50%; */
  /* height: 100%; */
  /* position: relative;
  height: 100%;
  background-color: #fff;
  border: 0.02rem solid #ccc;
  border-bottom: none;
  box-shadow: -0.04px 0 0.1px rgba(255, 255, 255, 0.1); */
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
  /* height: calc(100% - 1rem); */
  padding: 0 0.1rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 0.2rem;
  color: #000;
  padding: 0.2rem;
  margin-bottom: 0.1rem;
  border: 0.01rem solid #eee;
  box-shadow: 0.02rem 0.02rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.08rem;
  overflow: hidden;

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
  margin-right: 0.15rem;
  background-color: #f2f2f2;
  border-radius: 0.05rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  /* width: 100%; */
  flex: 1;
  height: 0.64rem;
`;

const ItemTitle = styled.div`
  flex: 1;
  font-size: 0.18rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemDesc = styled.div`
  display: flex;
  font-size: 0.16rem;
  color: #999;
`;

const ItemPrice = styled.div`
  /* position: absolute;
  top: 0.2rem;
  right: 0; */
  /* bottom: 0.2rem; */
  /* width: 10%; */
  font-size: 0.18rem;
  color: #333;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  height: 0.8rem;
  border-bottom: 0.01rem solid #999;
`;

const Title = styled.div`
  font-size: 0.26rem;
`;

const IconDelete = styled(Icon)`
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
`;

const Foot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 0.8rem;
  font-size: 0.26rem;
  /* text-align: center; */
  /* color: #fff; */
  /* background-color: #2997cc; */

  /* :active {
    opacity: 0.9;
  } */
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 0.01rem solid #ccc;

  :active {
    background-color: ${(props) => (props.primary ? '' : '#f2f2f2')};
  }

  ${(props) =>
    props.primary &&
    css`
      color: #fff;
      background-color: #2997cc;

      :active {
        opacity: 0.9;
      }
    `}
`;

export {
  Wrapper,
  Head,
  Title,
  List,
  ListItem,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  ItemPrice,
  IconDelete,
  Image,
  Foot,
  Button
};

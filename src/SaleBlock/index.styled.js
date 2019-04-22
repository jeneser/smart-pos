import styled, { css } from 'styled-components';
import Icon from '../common/components/Icon';

const SaleBlock = styled.div`
  /* position: relative;
  width: 33.333334%;
  height: calc(100vh - 0.8rem);
  padding: 0.2rem 0; */
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: #fff;
  border: 0.02rem solid #ccc;
  border-bottom: none;
  box-shadow: -0.04px 0 0.1px rgba(255, 255, 255, 0.1);
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100% - 1.6rem);
  padding: 0 0.2rem 0 0.2rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.2rem;
  color: #000;
  padding: 0.2rem 0;
  margin-bottom: 0.1rem;

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

const IconDelete = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0.2rem;
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
  SaleBlock,
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

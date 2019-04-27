import styled, { css } from 'styled-components';
import theme from '../common/styles/theme';

const Orders = styled.div`
  display: flex;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.15rem 0.2rem;
  height: 0.64rem;
  border-bottom: 0.01rem solid ${theme.p5};
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.2rem;
  color: ${theme.p4};
`;

const Aside = styled.div`
  position: relative;
  width: 3.8rem;
  height: 100vh;
  border-left: 0.01rem solid ${theme.p5};
`;

const AsideBody = styled.div`
  height: 100vh;
  padding-bottom: 0.64rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div``;

const ListHead = styled.div`
  position: sticky;
  top: 0;
  padding: 0.06rem 0.2rem;
  font-size: 0.14rem;
  color: ${theme.p4};
  background-color: ${theme.p6};
`;

const OrderListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.12rem 0;
  margin: 0 0.2rem;
  border-top: 0.01rem solid ${theme.p5};

  :last-child {
    border-bottom: 0.01rem solid ${theme.p5};
  }

  :active {
    background-color: ${theme.p8};
  }
`;

const LeftBlock = styled.div``;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LabelText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.02rem;
  color: ${theme.p9};
  font-size: 0.14rem;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}rem;
    `}
`;

const ValueText = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.p4};
  font-size: 0.16rem;
`;

const Main = styled.div`
  width: 5.76rem;
`;

const MainBody = styled.div`
  padding: 0.4rem 0.64rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;

  ${(props) =>
    props.flexEnd &&
    css`
      align-items: flex-end;
    `}
`;

const Amount = styled.div`
  margin-bottom: 0.1rem;
  font-size: 0.3rem;
  color: ${theme.p4};
  font-weight: bold;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.04rem 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.13rem;
  color: ${theme.b1};
  background-color: ${theme.b2};
  border-radius: 0.04rem;
`;

const ProductList = styled.div`
  height: 3.2rem;
  overflow-y: scroll;
  /* box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
  border-radius: 0.04rem; */

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 0.64rem;
  /* padding: 0 0.15rem; */
  font-size: 0.18rem;
  color: ${theme.p4};
  border-bottom: 0.01rem solid ${theme.p5};
  /* border-right: 0.01rem solid ${theme.p5}; */
  overflow: hidden;

  :active {
    background-color: #f2f2f2;
  }

  /* :not(:last-child) {
    border-bottom: none;
  } */
`;

const Image = styled.img`
  max-width: 0.42rem;
  width: 100%;
  height: 0.42rem;
  margin-right: 0.12rem;
  background-color: ${theme.p6};
  border-radius: 0.04rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const ItemTitle = styled.div`
  max-width: 1.48rem;
  font-size: 0.15rem;
  color: ${theme.p4};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemDesc = styled.div`
  margin-top: 0.02rem;
  font-size: 0.14rem;
  color: ${theme.p9};
`;

const ItemCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0.22rem;
  height: 0.22rem;
  font-size: 0.15rem;
  color: ${theme.p4};
  background-color: ${theme.p6};
  border-radius: 0.04rem;
  border: 0.01rem solid ${theme.p5};
`;

const PriceWrapper = styled.div`
  width: 0.54rem;
  margin-left: 0.1rem;
  text-align: right;
`;

const ItemPrice = styled.div`
  font-size: 0.15rem;
  color: ${theme.p4};
`;

const ItemOriginPrice = styled(ItemPrice)`
  margin-top: 0.02rem;
  color: ${theme.p9};
  text-decoration: line-through;
`;

const SettleList = styled.div`
  height: 1.44rem;
  /* margin-top: 0.15rem; */
  /* box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
  border-radius: 0.04rem; */
`;

const SettleItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.48rem;
  font-size: 0.14rem;
  color: ${theme.p4};
  border-bottom: 0.01rem solid ${theme.p5};

  :active {
    background-color: #f2f2f2;
  }
`;

const TextLabel = styled.div`
  font-size: 0.15rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.48rem;
  min-width: 1.8rem;
  padding: 0 0.2rem;
  font-size: 0.16rem;
  color: ${theme.p2};
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;

  :active {
    color: #fff;
    background-color: ${theme.p2};
  }
`;

export {
  Orders,
  Aside,
  Main,
  Head,
  Title,
  AsideBody,
  List,
  ListHead,
  OrderListItem,
  LeftBlock,
  RightBlock,
  LabelText,
  ValueText,
  MainBody,
  Row,
  Amount,
  Tag,
  ProductList,
  ListItem,
  Image,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  ItemCount,
  PriceWrapper,
  ItemPrice,
  ItemOriginPrice,
  SettleList,
  SettleItem,
  TextLabel,
  Button
};

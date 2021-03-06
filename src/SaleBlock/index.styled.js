import styled, { css } from 'styled-components';
import theme from '../common/styles/theme';
import Icon from '../common/components/Icon';

const SaleBlock = styled.div`
  position: relative;
  width: 3.8rem;
  height: 100vh;
  border-left: 0.01rem solid ${theme.p5};
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
  font-size: 0.2rem;
  color: ${theme.p4};
`;

const Body = styled.div`
  padding: 0.15rem 0.2rem;
`;

const Customer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 0.64rem;
  padding: 0.15rem;
  margin-bottom: 0.15rem;
  color: ${theme.p7};
  font-size: 0.16rem;
  background-color: ${theme.p8};
  border-radius: 0.04rem;
  border: 0.01rem solid ${theme.p5};
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);

  :active {
    opacity: 0.8;
  }
`;

const CustomerId = styled.div`
  margin-left: 0.1rem;
  padding-top: 0.02rem;
`;

const EnhanceIcon = styled(Icon)`
  position: absolute;
  right: 0.15rem;
  top: 50%;
  transform: translateY(-50%);
`;

const ProductList = styled.div`
  max-height: 3.2rem;
  overflow-y: scroll;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
  border-radius: 0.04rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 0.64rem;
  padding: 0 0.15rem;
  font-size: 0.18rem;
  color: ${theme.p4};
  border: 0.01rem solid ${theme.p5};
  overflow: hidden;

  :active {
    background-color: #f2f2f2;
  }

  :not(:last-child) {
    border-bottom: none;
  }

  :first-child {
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
  }

  :last-child {
    border-bottom-left-radius: 0.04rem;
    border-bottom-right-radius: 0.04rem;
  }
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

const ListItemWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 0.15rem;
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.64rem;
  height: 100%;
  background-color: red;
  border-top-right-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
`;

const Settlement = styled.div`
  position: absolute;
  bottom: 0.2rem;
  left: 0.2rem;
  right: 0.2rem;
`;

const SettleList = styled.div`
  max-height: 1.92rem;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
  border-radius: 0.04rem;
`;

const SettleItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.48rem;
  padding: 0 0.15rem;
  font-size: 0.14rem;
  color: ${theme.p4};
  border: 0.01rem solid ${theme.p5};

  :active {
    background-color: #f2f2f2;
  }

  :not(:last-child) {
    border-bottom: none;
  }

  :first-child {
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
  }

  :last-child {
    border-bottom-left-radius: 0.04rem;
    border-bottom-right-radius: 0.04rem;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${theme.p2};
    `}
`;

const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.48rem;
  padding: 0 0.15rem;
  margin-top: 0.15rem;
  color: #fff;
  background-color: ${theme.p2};
  font-size: 0.18rem;
  border-radius: 0.04rem;
  border: 0.01rem solid ${theme.p5};
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
`;

const TextLabel = styled.div`
  font-size: 0.15rem;
`;

const CustomerList = styled.div`
  width: 3.2rem;
  height: 3.4rem;
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;
  background-color: #fff;
  border-radius: 0.04rem;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CustomerItem = styled.div`
  display: flex;
  align-items: center;
  height: 0.64rem;
  border-bottom: 0.01rem solid ${theme.p5};

  :last-child {
    border-bottom: none;
  }

  :active {
    background-color: #f2f2f2;
  }
`;

const Avatar = styled.div`
  width: 0.44rem;
  height: 0.44rem;
  margin-right: 0.15rem;
  border-radius: 100%;
  background-color: ${theme.p9};
`;

const Desc = styled.div`
  font-size: 0.15rem;
  color: ${theme.p4};
`;

const Text = styled.div``;

const CustomerInfo = styled.div`
  margin-top: 0.02rem;
  color: ${theme.p9};
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.38rem;
  margin-bottom: 0.1rem;
  font-size: 0.15rem;
  color: #fff;
  background-color: ${theme.p2};
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-size: 0.16rem;
  color: ${theme.p5};
`;

const BarcodeInput = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.1rem;
  height: 0.01rem;
  opacity: 0;
  border: none;
  background: none;
  outline: none;
`;

export {
  SaleBlock,
  Head,
  Title,
  Body,
  Customer,
  CustomerId,
  EnhanceIcon,
  ItemCount,
  ProductList,
  ListItem,
  ListItemWrapper,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  PriceWrapper,
  ItemOriginPrice,
  ItemPrice,
  DeleteButton,
  Settlement,
  SettleList,
  SettleItem,
  Image,
  Amount,
  TextLabel,
  CustomerList,
  CustomerItem,
  Avatar,
  Desc,
  Text,
  CustomerInfo,
  Button,
  Empty,
  BarcodeInput
};

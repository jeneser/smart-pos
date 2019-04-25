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
  height: 36%;
  margin-bottom: 0.4rem;
  padding: 0 0.4rem;
  margin: 0.4rem 0;
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  max-width: calc(50% - 0.2rem);
  height: 100%;
  border: 0.01rem solid #eee;
  overflow-y: scroll;
  border-radius: 5px;
  box-shadow: 0.02rem 0.02rem 0.1rem rgba(0, 0, 0, 0.1);

  :last-child {
    margin-right: 0;
  }

  :active {
    background-color: #f2f2f2;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CardHead = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.15rem 0.24rem;
  font-size: 0.18rem;
  color: #333;
  background-color: #fff;
  z-index: 1;
  border-bottom: 0.01rem solid #eee;
`;

const CardBody = styled.div`
  padding: 0 0.24rem;
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.18rem;
  padding: 0.15rem 0;
  margin: 0.05rem 0;
  border-bottom: 1px solid #eee;
`;

const Text = styled.div`
  flex: 1;
  width: 62.5%;
  margin-left: 0.15rem;
  font-size: 0.19rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemTitle = styled(Text)`
  color: #444;
  font-size: 0.17rem;
`;

const ItemPrice = styled.div`
  font-size: 0.18rem;
  color: #666;
`;

export {
  Wrapper,
  Row,
  Card,
  CardHead,
  CardBody,
  ListItem,
  Text,
  ItemTitle,
  ItemPrice
};

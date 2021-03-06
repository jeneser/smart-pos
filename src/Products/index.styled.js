import styled from 'styled-components';
import theme from '../common/styles/theme';
import iconSearchGray from '../common/images/icon_search_gray.png';

const Products = styled.div`
  width: 5.76rem;
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

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100vh;
  padding-bottom: 0.64rem;
  background-color: ${theme.p6};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Row = styled.div`
  /* display: flex;
  height: 3.27rem;
  border-bottom: 0.01rem solid ${theme.p5}; */
`;

const Col = styled.div`
  /* width: 2.875rem;

  :first-child {
    border-right: 0.01rem solid ${theme.p5};
  } */
`;

const Card = styled.div`
  width: 2.875rem;
  height: 3.27rem;
  background-color: #fff;
  border-bottom: 0.01rem solid ${theme.p5};

  :nth-child(2n - 1) {
    border-right: 0.01rem solid ${theme.p5};
  }
`;

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.6rem;
  border-bottom: 0.01rem solid ${theme.p5};
`;

const Image = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;

const CardBody = styled.div`
  padding: 0.15rem;
`;

const ItemDesc = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
  color: ${theme.p4};
`;
const ItemTitle = styled.div``;

const ItemPrice = styled.div`
  display: flex;
`;

const ItemOriginPrice = styled.div`
  margin-left: 0.05rem;
  color: ${theme.p7};
  text-decoration: line-through;
`;

const ItemInfo = styled.div`
  margin-top: 0.1rem;
  font-size: 0.14rem;
  color: ${theme.p9};
`;

const Tags = styled.div`
  display: flex;
  margin-top: 0.12rem;
`;
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.2rem;
  padding: 0 0.1rem;
  text-align: center;
  font-size: 0.13rem;
  color: ${theme.p4};
  background-color: ${theme.p6};
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;

  :not(:last-child) {
    margin-right: 0.1rem;
  }
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.32rem;
  margin-top: 0.12rem;
  font-size: 0.16rem;
  color: #fff;
  background-color: ${theme.p4};
  border-radius: 0.04rem;
`;

const searchBar = styled.div`
  display: flex;
  align-items: center;
  height: 0.3rem;
  flex: 1;
`;

const searchInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.1rem 0.35rem;
  border: 0.01rem solid ${theme.p5};
  font-size: 0.14rem;
  color: ${theme.p4};
  outline: none;
  border-radius: 0.04rem;
  background-image: url(${iconSearchGray});
  background-repeat: no-repeat;
  background-size: 0.18rem 0.18rem;
  background-position: 0.1rem center;

  ::placeholder {
    color: ${theme.p9};
  }
`;

const searchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.8rem;
  height: 0.3rem;
  margin-left: 0.2rem;
  font-size: 0.14rem;
  color: #fff;
  background-color: ${theme.p2};
  border-radius: 0.04rem;

  :active {
    opacity: 0.85;
  }
`;

export {
  Products,
  Head,
  Title,
  Body,
  Row,
  Col,
  Card,
  Cover,
  Image,
  CardBody,
  ItemDesc,
  ItemTitle,
  ItemPrice,
  ItemOriginPrice,
  ItemInfo,
  Tags,
  Tag,
  AddButton,
  searchBar,
  searchInput,
  searchButton
};

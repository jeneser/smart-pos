import styled, { css } from 'styled-components';

const SearchBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.8rem;
  padding: 0.2rem 0.24rem;
  font-size: 0.24rem;
  border-bottom: 0.01rem solid #ccc;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;

  ::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  background-color: #2997cc;

  :active {
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  border: 0.01rem solid #ccc;
  overflow: hidden;
`;

const ProductList = styled.div`
  height: calc(100% - 0.8rem);
  padding: 0 0.2rem;
  overflow-y: scroll;

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
  SearchBar,
  SearchInput,
  SearchIcon,
  ProductList,
  ListItem,
  Image,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  ItemPrice
};

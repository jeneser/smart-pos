import styled, { css } from 'styled-components';

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
  text-align: center;
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

export { SaleBlock, Head, Foot, List, ListItem, ProductDesc, ProductPrice };

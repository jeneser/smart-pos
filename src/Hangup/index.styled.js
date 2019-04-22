import styled from 'styled-components';
import SaleBlock from '../SaleBlock';

const Wrapper = styled.div`
  height: calc(100vh - 0.8rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Headline = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 1.2rem;
  padding: 0 0.34rem;
  color: #666;
  font-size: 0.30rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 62.5%;
  margin-bottom: 0.4rem;
  padding: 0 0.34rem;
`;

const EnhanceSaleBlock = styled(SaleBlock)`
  width: 80%;
  margin-top: 0;
`;

export {
  Wrapper,
  Headline,
  Row,
  EnhanceSaleBlock
}
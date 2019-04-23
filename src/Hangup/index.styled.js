import styled from 'styled-components';
import SaleBlock from '../SaleBlock';

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
  Row,
  EnhanceSaleBlock
}
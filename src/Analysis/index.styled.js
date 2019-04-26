import styled from 'styled-components';

const HeaderBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.6rem;
  padding: 0 0.4rem;
  font-size: 0.2rem;
  text-align: center;
  color: #333;
  border-bottom: 0.01rem solid #ddd;
  background-color: #fafafa;
  z-index: 2;
  box-shadow: 0.02rem 0.02rem 0.08rem rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.8rem;
  width: 100vw;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
`;

const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-right: 0.01rem solid #eee;
  border-left: 0.01rem solid #eee;
`;

const Title = styled.div`
  font-size: 0.24rem;
  font-weight: 800;
  color: #333;
`;

const Label = styled.div`
  margin-top: 0.16rem;
  font-size: 0.18rem;
  color: #aaa;
`;

const ChartCard = styled.div`
  margin: 0 0.4rem;
  padding: 0.4rem 0;
  border-top: 0.01rem solid #eee;
`;

export { Container, HeaderBar, Summary, Col, Title, Label, ChartCard };

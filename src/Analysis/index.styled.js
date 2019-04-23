import styled from 'styled-components';

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  margin-bottom: 0.4rem;
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
  font-size: 0.32rem;
  font-weight: 800;
`;

const Label = styled.div`
  margin-top: 0.2rem;
  font-size: 0.22rem;
  color: #999;
`;

const ChartCard = styled.div`
  margin: 0 0.4rem;
  padding: 0.4rem 0;
  border-top: 0.01rem solid #eee;
`;

export { Summary, Col, Title, Label, ChartCard };

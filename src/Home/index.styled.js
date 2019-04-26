import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.8rem;
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { Container };

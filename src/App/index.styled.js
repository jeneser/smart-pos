import styled from 'styled-components';

const App = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;


  ::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { App, Main };

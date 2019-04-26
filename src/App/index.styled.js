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
  box-shadow: -0.02rem -0.02rem 0.12rem rgba(0, 0, 0, 0.6);

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { App, Main };

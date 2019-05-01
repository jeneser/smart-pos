import styled from 'styled-components';

const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none'
  }
};

export { container, modalStyle };

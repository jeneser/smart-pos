import styled from 'styled-components';
import theme from '../styles/theme';
import { ToastContainer } from 'react-toastify';

const Toastify = styled(ToastContainer)`
  font-size: 0.17rem;

  .Toastify__close-button {
    display: none;
  }

  .Toastify__toast {
    padding-left: 0.15rem;
    padding-right: 0.15rem;
  }
`;

export { Toastify };

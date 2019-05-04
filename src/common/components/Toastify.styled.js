import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .Toastify__toast-container {
    font-size: 0.17rem;

    .Toastify__close-button {
      display: none;
    }

    .Toastify__toast {
      padding-left: 0.15rem;
      padding-right: 0.15rem;
    }
  }
`;

export { GlobalStyle };

import React, { Fragment } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import * as styled from './Toastify.styled';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Toast Container
 */
function Toastify(props) {
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        {...props}
      />
      <styled.GlobalStyle />
    </Fragment>
  );
}

export { toast, Toastify };

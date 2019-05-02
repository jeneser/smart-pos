import React from 'react';
import { toast } from 'react-toastify';

import * as styled from './Toastify.styled';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Toast Container
 */
function ToastContainer() {
  return (
    <styled.Toastify
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  );
}

export { toast, ToastContainer };

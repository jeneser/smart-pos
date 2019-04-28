import React, { Fragment } from 'react';

import SaleBlock from '../SaleBlock';
import Products from '../Products';

function Cart() {
  return (
    <Fragment>
      {/* Products */}
      <Products />

      {/* SaleBlock */}
      <SaleBlock />
    </Fragment>
  );
}

export default Cart;

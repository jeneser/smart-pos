import React, { Fragment } from 'react';

import SaleBlock from '../SaleBlock';
import Products from '../Products';

/**
 * 购物车
 */
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

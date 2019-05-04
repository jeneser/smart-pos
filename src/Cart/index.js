import React, { Fragment, useState } from 'react';

import SaleBlock from '../SaleBlock';
import Products from '../Products';

/**
 * 购物车
 */
function Cart() {
  const [saleInputMethod, setSaleInputMethod] = useState('barcode');

  return (
    <Fragment>
      {/* Products */}
      <Products
        changeSaleInputMethod={(method) => setSaleInputMethod(method)}
      />

      {/* SaleBlock */}
      <SaleBlock inputMethod={saleInputMethod} />
    </Fragment>
  );
}

export default Cart;

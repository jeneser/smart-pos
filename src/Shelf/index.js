import React, { Fragment } from 'react';
import get from 'lodash.get';
import * as styled from './index.styled';

import { mockProducts, mockDiscounts } from '../common/mock/products';

function Shelf({ match }) {
  const shelfType = get(match, 'params.shelf');

  const productsData = mockProducts;
  const discountsData = mockDiscounts;

  return '';
  return (
    <styled.Shelf>
      {/* 推荐商品 */}
      {productsData.map((products, index) => {
        return (
          <styled.Row key={index}>
            {products.map((item, index) => {
              return (
                <styled.Card key={item.itemId + String(index)}>
                  {item && (
                    <Fragment>
                      <styled.Image source={item.itemPic} />
                      <styled.Text>{item.itemTitle}</styled.Text>
                    </Fragment>
                  )}
                </styled.Card>
              );
            })}
          </styled.Row>
        );
      })}
      {/* 店铺折扣 */}
      <styled.Row>
        {discountsData.map((item, index) => {
          return (
            <styled.Card key={index}>
              {item && (
                <Fragment>
                  <styled.Image source={item.picture} />
                  <styled.Text>{item.title}</styled.Text>
                </Fragment>
              )}
            </styled.Card>
          );
        })}
      </styled.Row>
    </styled.Shelf>
  );
}

export default Shelf;

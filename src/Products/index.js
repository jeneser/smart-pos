import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import get from 'lodash.get';
import find from 'lodash.find';
import Icon from '../common/components/Icon';
import axios from 'axios';
import * as actionTypes from '../common/store/actionTypes';

import * as styled from './index.styled';

/**
 * 商品池
 */
function Products() {
  // 商品列表
  const [productList, setProductList] = useState([]);

  // map state
  const { currentCustomerId } = useMappedState(
    useCallback((state) => {
      const customerList = get(state, 'customer', []);
      // 当前顾客
      const currentCustomer = find(customerList, ['isCurrent', true]) || {};
      // 当前顾客 ID
      const currentCustomerId = get(currentCustomer, 'id', '');

      return { currentCustomerId };
    }, [])
  );

  useEffect(() => {
    /**
     * 获取数据
     */
    const fetchData = async () => {
      const result = await axios.get(
        'https://5667bbd1-ee00-4797-92af-440a47f87dcb.mock.pstmn.io/products'
      );

      setProductList(result.data.result);
    };

    fetchData();
  }, []);

  // actions
  const dispatch = useDispatch();

  /**
   * 添加商品
   * @param  {Object} productItem
   */
  const handleAddProductItem = (productItem) => {
    if (!currentCustomerId) return;

    return () =>
      dispatch({
        type: actionTypes.ADD_PRODUCT_ITEM,
        payload: {
          id: currentCustomerId,
          item: productItem
        }
      });
  };

  return (
    <styled.Products>
      {/* head */}
      <styled.Head>
        <styled.Title>商品池</styled.Title>
        <Icon name="icon_search_black" width="0.24" height="0.24" />
      </styled.Head>

      {/* Body */}
      <styled.Body>
        {productList.map((item) => {
          return (
            <styled.Card key={item.itemId}>
              <styled.Cover>
                <styled.Image src={item.itemPic} />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>{item.shortTitle}</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥{item.itemPrice}
                    <styled.ItemOriginPrice>
                      {item.originalPrice}
                    </styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>{item.title}</styled.ItemInfo>
                <styled.Tags>
                  {item.salePoints &&
                    item.salePoints.map((point) => {
                      return <styled.Tag key={point}>{point}</styled.Tag>;
                    })}
                </styled.Tags>
                <styled.AddButton onClick={handleAddProductItem(item)}>
                  添加商品
                </styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          );
        })}
      </styled.Body>
    </styled.Products>
  );
}

export default Products;

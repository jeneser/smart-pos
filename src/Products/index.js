import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import get from 'lodash.get';
import find from 'lodash.find';
import Icon from '../common/components/Icon';
import request from '../common/api/request';
import { toast, Toastify } from '../common/components/Toastify';

import * as actionTypes from '../common/store/actionTypes';
import * as styled from './index.styled';

/**
 * 商品池
 * @param  {{changeSaleInputMethod: String}} {changeSaleInputMethod}
 */
function Products({ changeSaleInputMethod }) {
  // 商品列表
  const [productList, setProductList] = useState([]);
  // 搜索框
  const [searchBarIsShow, setSearchBarIsShow] = useState(false);
  // 查询 id
  const [queryItemId, setQueryItemId] = useState('');

  // map state
  const { currentCustomerId, giftsIsShow } = useMappedState(
    useCallback((state) => {
      const customerList = get(state, 'customer', []);
      // 当前顾客
      const currentCustomer = find(customerList, ['isCurrent', true]) || {};
      // 当前顾客 ID
      const currentCustomerId = get(currentCustomer, 'id', '');
      // 展示礼品卡
      const giftsIsShow = get(state, 'gift.isShow', false);

      return { currentCustomerId, giftsIsShow };
    }, [])
  );

  useEffect(() => {
    /**
     * 获取数据
     */
    const fetchData = async () => {
      try {
        const url = giftsIsShow ? `/gifts` : `/products`;

        setProductList((await request({ url })) || []);
      } catch (e) {}
    };

    fetchData();
  }, [giftsIsShow]);

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

  /**
   * 查询单个商品
   */
  const querySingleProduct = useCallback(() => {
    const fetchData = async () => {
      try {
        const url = giftsIsShow
          ? `/gifts/${queryItemId}`
          : `/products/${queryItemId}`;

        setProductList((await request({ url })) || []);
      } catch (e) {
        toast.warn('商品不存在！');
      }
    };

    fetchData();

    setSearchBarIsShow(false);
    setQueryItemId('');
    changeSaleInputMethod('barcode');
  }, [queryItemId, giftsIsShow]);

  return (
    <styled.Products>
      {/* head */}
      <styled.Head>
        {searchBarIsShow ? (
          <styled.searchBar>
            <styled.searchInput
              value={queryItemId}
              autoFocus
              placeholder="输入商品id"
              onChange={(e) => setQueryItemId(e.target.value)}
            />
            <styled.searchButton onClick={querySingleProduct}>
              查询
            </styled.searchButton>
          </styled.searchBar>
        ) : (
          <Fragment>
            <styled.Title>{giftsIsShow ? '礼品卡' : '商品池'}</styled.Title>
            <Icon
              name="icon_search_black"
              width="0.24"
              height="0.24"
              onClick={() => {
                setSearchBarIsShow(!searchBarIsShow);
                changeSaleInputMethod('manual');
              }}
            />
          </Fragment>
        )}
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
                    {item.itemPrice ? `￥${item.itemPrice}` : ''}
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
      <Toastify />
    </styled.Products>
  );
}

export default Products;

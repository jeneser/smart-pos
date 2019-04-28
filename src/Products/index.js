/**
 * @file 商品池
 */

import React, { useState, useEffect } from 'react';
import Icon from '../common/components/Icon';
import axios from 'axios';

import * as styled from './index.styled';

import { mockOrderList } from '../common/mock/products';

function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://5667bbd1-ee00-4797-92af-440a47f87dcb.mock.pstmn.io/products'
      );

      setProductList(result.data.result);
    };

    fetchData();
  }, []);

  console.log(productList);

  return (
    <styled.Products>
      {/* head */}
      <styled.Head>
        <styled.Title>商品池</styled.Title>
        <Icon name="icon_search_black" width="0.24" height="0.24" />
      </styled.Head>

      {/* Body */}
      <styled.Body>
        {productList.map((items) => {
          return (
            <styled.Card key={items.itemId}>
              <styled.Cover>
                <styled.Image src={items.itemPic} />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>{items.shortTitle}</styled.ItemTitle>
                  <styled.ItemPrice>
                    {items.itemPrice}
                    <styled.ItemOriginPrice>
                      {items.originalPrice}
                    </styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>{items.title}</styled.ItemInfo>
                <styled.Tags>
                  {items.salePoints &&
                    items.salePoints.map((point) => {
                      return <styled.Tag key={point}>{point}</styled.Tag>;
                    })}
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          );
        })}

        {/* <styled.Row>
          <styled.Col>
            <styled.Card>
              <styled.Cover>
                <styled.Image src="https://gd4.alicdn.com/imgextra/i4/1071005252/TB2hmo_hrsrBKNjSZFpXXcXhFXa_!!1071005252.jpg" />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>韩版简约书包</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥85<styled.ItemOriginPrice>￥85</styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>
                  韩版简约高中少女旅行背包多功能大学生双肩包休闲纯色初中书包女
                </styled.ItemInfo>
                <styled.Tags>
                  <styled.Tag>红色 96A</styled.Tag>
                  <styled.Tag>当季新款</styled.Tag>
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          </styled.Col>

          <styled.Col>
            <styled.Card>
              <styled.Cover>
                <styled.Image src="https://gd4.alicdn.com/imgextra/i4/1071005252/O1CN01fGdj031ofSeiRRsLO_!!1071005252.jpg" />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>韩版简约书包</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥85<styled.ItemOriginPrice>￥85</styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>
                  韩版简约高中少女旅行背包多功能大学生双肩包休闲纯色初中书包女
                </styled.ItemInfo>
                <styled.Tags>
                  <styled.Tag>红色 96A</styled.Tag>
                  <styled.Tag>当季新款</styled.Tag>
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          </styled.Col>
        </styled.Row>

        <styled.Row>
          <styled.Col>
            <styled.Card>
              <styled.Cover>
                <styled.Image src="https://gd4.alicdn.com/imgextra/i4/1071005252/TB2hmo_hrsrBKNjSZFpXXcXhFXa_!!1071005252.jpg" />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>韩版简约书包</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥85<styled.ItemOriginPrice>￥85</styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>
                  韩版简约高中少女旅行背包多功能大学生双肩包休闲纯色初中书包女
                </styled.ItemInfo>
                <styled.Tags>
                  <styled.Tag>红色 96A</styled.Tag>
                  <styled.Tag>当季新款</styled.Tag>
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          </styled.Col>

          <styled.Col>
            <styled.Card>
              <styled.Cover>
                <styled.Image src="https://gd4.alicdn.com/imgextra/i4/1071005252/O1CN01fGdj031ofSeiRRsLO_!!1071005252.jpg" />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>韩版简约书包</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥85<styled.ItemOriginPrice>￥85</styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>
                  韩版简约高中少女旅行背包多功能大学生双肩包休闲纯色初中书包女
                </styled.ItemInfo>
                <styled.Tags>
                  <styled.Tag>红色 96A</styled.Tag>
                  <styled.Tag>当季新款</styled.Tag>
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          </styled.Col>
        </styled.Row> */}

        {/* <styled.Row>
          <styled.Col>
            <styled.Card>
              <styled.Cover>
                <styled.Image src="https://gd4.alicdn.com/imgextra/i4/1071005252/TB2hmo_hrsrBKNjSZFpXXcXhFXa_!!1071005252.jpg" />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>韩版简约书包</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥85<styled.ItemOriginPrice>￥85</styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>
                  韩版简约高中少女旅行背包多功能大学生双肩包休闲纯色初中书包女
                </styled.ItemInfo>
                <styled.Tags>
                  <styled.Tag>红色 96A</styled.Tag>
                  <styled.Tag>当季新款</styled.Tag>
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          </styled.Col> */}

        {/* <styled.Col>
            <styled.Card>
              <styled.Cover>
                <styled.Image src="https://gd4.alicdn.com/imgextra/i4/1071005252/O1CN01fGdj031ofSeiRRsLO_!!1071005252.jpg" />
              </styled.Cover>
              <styled.CardBody>
                <styled.ItemDesc>
                  <styled.ItemTitle>韩版简约书包</styled.ItemTitle>
                  <styled.ItemPrice>
                    ￥85<styled.ItemOriginPrice>￥85</styled.ItemOriginPrice>
                  </styled.ItemPrice>
                </styled.ItemDesc>
                <styled.ItemInfo>
                  韩版简约高中少女旅行背包多功能大学生双肩包休闲纯色初中书包女
                </styled.ItemInfo>
                <styled.Tags>
                  <styled.Tag>红色 96A</styled.Tag>
                  <styled.Tag>当季新款</styled.Tag>
                </styled.Tags>
                <styled.AddButton>添加商品</styled.AddButton>
              </styled.CardBody>
            </styled.Card>
          </styled.Col> */}
        {/* </styled.Row> */}
      </styled.Body>
    </styled.Products>
  );
}

export default Products;

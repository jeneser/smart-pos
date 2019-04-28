import React from 'react';
import Icon from '../common/components/Icon';
import * as styled from './index.styled';

import { mockOrderList } from '../common/mock/products';

function Products() {
  const productList = mockOrderList;

  return (
    <styled.Products>
      {/* head */}
      <styled.Head>
        <styled.Title>商品池</styled.Title>
        <Icon name="icon_search_black" width="0.24" height="0.24" />
      </styled.Head>
      {/* Body */}
      <styled.Body>
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
        </styled.Row>
      </styled.Body>
    </styled.Products>
  );
}

export default Products;

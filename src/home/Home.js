import React from 'react';
import {
  Wrapper,
  Shelf,
  SaleBlock,
  NavBar,
  Row,
  Col,
  Card,
  Image,
  Text,
  NavItem,
  Head,
  Foot,
  List,
  ListItem,
  ProductDesc,
  ProductPrice
} from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      {/* 推荐商品 */}
      <Shelf>
        <Row>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
        </Row>

        <Row>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
        </Row>
        <Row>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
        </Row>
        <Row>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card>
            <Image />
            <Text>粉色连衣裙</Text>
          </Card>
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
          <Card>欢迎</Card>
          <Card>礼品卡</Card>
          <Card>折扣</Card>
        </Row>
      </Shelf>

      {/* 订单 */}
      <SaleBlock>
        <Head>当前订单</Head>
        <List>
          <ListItem>
            <ProductDesc>粉色连衣裙</ProductDesc>
            <ProductPrice>$288.00</ProductPrice>
          </ListItem>
          <ListItem>
            <ProductDesc>粉色连衣裙</ProductDesc>
            <ProductPrice>$288.00</ProductPrice>
          </ListItem>
          <ListItem>
            <ProductDesc>粉色连衣裙</ProductDesc>
            <ProductPrice>$288.00</ProductPrice>
          </ListItem>
          <ListItem>
            <ProductDesc>粉色连衣裙</ProductDesc>
            <ProductPrice>$288.00</ProductPrice>
          </ListItem>

          <ListItem borderTop>
            <ProductDesc>优惠折扣</ProductDesc>
            <ProductPrice>-$288.00</ProductPrice>
          </ListItem>
          <ListItem>
            <ProductDesc>配送费用</ProductDesc>
            <ProductPrice>$28.00</ProductPrice>
          </ListItem>
        </List>
        <Foot>结算 ￥198.00</Foot>
      </SaleBlock>

      {/* 底部导航栏 */}
      <NavBar>
        <NavItem width="10">菜单</NavItem>
        <NavItem>服饰上新</NavItem>
        <NavItem active={true}>热销鞋帽</NavItem>
        <NavItem>配饰挂件</NavItem>
        <NavItem>配饰</NavItem>
        <NavItem>配饰</NavItem>
      </NavBar>
    </Wrapper>
  );
};

export default Home;

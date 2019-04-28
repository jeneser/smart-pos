import styled, { css } from 'styled-components';
import theme from '../common/styles/theme';
import * as commonStyle from '../common/styles/common';

const Configure = styled(commonStyle.container)``;

const Aside = styled.div`
  position: relative;
  width: 3.8rem;
  height: 100vh;
  border-right: 0.01rem solid ${theme.p5};
`;

const Main = styled.div`
  width: 6.44rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.15rem 0.2rem;
  height: 0.64rem;
  border-bottom: 0.01rem solid ${theme.p5};
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.2rem;
  color: ${theme.p4};
`;

const Body = styled.div``;

const MenuList = styled.div`
  margin: 0.2rem 0.24rem;
  box-shadow: 0.01rem 0.01rem 0.05rem rgba(0, 0, 0, 0.1);
  border-radius: 0.04rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 0.58rem;
  padding: 0 0.15rem;
  border: 0.01rem solid ${theme.p5};

  :active {
    background-color: #f2f2f2;
  }

  :not(:last-child) {
    border-bottom: none;
  }

  :first-child {
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
  }

  :last-child {
    border-bottom-left-radius: 0.04rem;
    border-bottom-right-radius: 0.04rem;
  }
`;

const Text = styled.div`
  margin-left: 0.1rem;
  font-size: 0.17rem;
  color: ${theme.p4};
`;

const MainBody = styled.div`
  height: 100vh;
  padding: 0.24rem 0.6rem;
  background-color: ${theme.p6};
`;

const Legend = styled.div`
  padding: 0.1rem 0;
  margin-top: 0.15rem;
  color: ${theme.p9};
  font-size: 0.14rem;
  border-bottom: 0.01rem solid ${theme.p5};

  :first-child {
    margin-top: 0;
  }
`;

const RowItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.52rem;
  padding: 0 0.15rem;
  margin: 0.2rem 0;
  font-size: 0.16rem;
  background-color: #fff;
  border: 0.01rem solid ${theme.p5};
  border-radius: 0.04rem;

  :active {
    background-color: #f2f2f2;
  }
`;

const LabelText = styled.div``;

const LabelValue = styled.div`
  color: ${theme.p9};
`;

export {
  Configure,
  Aside,
  Main,
  Head,
  Title,
  Body,
  MenuList,
  MenuItem,
  Text,
  MainBody,
  Legend,
  RowItem,
  LabelText,
  LabelValue
};

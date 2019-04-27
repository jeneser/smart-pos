import styled, { css } from 'styled-components';
import theme from '../common/styles/theme';

const Orders = styled.div`
  display: flex;
`;

const Aside = styled.div`
  position: relative;
  width: 3.8rem;
  height: 100vh;
  border-left: 0.01rem solid ${theme.p5};
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

const Main = styled.div`
  width: 5.76rem;
`;

const AsideBody = styled.div`
  height: 100vh;
  padding-bottom: 0.64rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div``;

const ListHead = styled.div`
position: sticky;
top: 0;
  padding: 0.06rem 0.2rem;
  font-size: 0.14rem;
  color: ${theme.p4};
  background-color: ${theme.p6};
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.12rem 0;
  margin: 0 0.2rem;
  border-top: 0.01rem solid ${theme.p5};



  :last-child {
    border-bottom: 0.01rem solid ${theme.p5};
  }
`;

const LeftBlock = styled.div``;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LabelText = styled.div`
  margin-top: 0.02rem;
  color: ${theme.p9};
  font-size: 0.14rem;
`;

const ValueText = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.p4};
  font-size: 0.16rem;
`;

export {
  Orders,
  Aside,
  Main,
  Head,
  Title,
  AsideBody,
  List,
  ListHead,
  ListItem,
  LeftBlock,
  RightBlock,
  LabelText,
  ValueText
};

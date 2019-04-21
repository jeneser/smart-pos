import styled from 'styled-components';

const Shelf = styled.div`
  width: 66.666666%;
  height: calc(100vh - 0.8rem);
  padding: 0.2rem;
  background-color: #f2f4f5;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 1.648rem;
  height: 1.648rem;
  font-size: 0.2rem;
  background-color: #ededed;
  border: solid 1px #ccc;

  :active {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 1.648rem;
  height: 1.248rem;
  background-image: url(${(props) => (props.source ? props.source : '')});
  background-size: 1.648rem 1.248rem;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.05rem;
  height: 0.4rem;
  font-size: 0.2rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export { Shelf, Row, Card, Image, Text };

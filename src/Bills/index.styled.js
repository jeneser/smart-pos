import styled, { css } from 'styled-components';

const Table = styled.div`
  margin: 0 0.24rem;
  border: 0.01rem solid #eee;
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  display: flex;
  height: 0.8rem;
  border-bottom: 0.01rem solid #eee;

  :active {
    background: #f9f9f9;
  }
`;

const TableCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 0.1rem;
  font-size: 0.18rem;
  color: #555;
`;

const TableHead = styled.div`
  display: flex;
  position: sticky;
  top: -0.4rem;
  height: 0.64rem;
  background-color: #f2f2f2;
  border: 0.01rem solid #ccc;
`;

const TableHeadCell = styled(TableCell)`
  color: #333;
`;

const TableFoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.5%;
  height: 0.6rem;
  color: #2997cc;
  font-size: 0.2rem;
  border: 0.01rem solid #ccc;

  :active {
    background-color: #2997cc;
    color: #fff;
  }
`;

export {
  Table,
  TableHead,
  TableHeadCell,
  TableCell,
  TableBody,
  TableRow,
  TableFoot,
  Button
};

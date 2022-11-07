import styled from 'styled-components';

export const TabelaContratos = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  width: 1200px;
  height: 600;
  background-color: #979797;
  border-radius: 40px;
  padding: 30px;
`;

export const Table = styled.table`
  font-size: 13px;
  width: 100%;
  height: 90%;

  th {
    border: 2px solid black;
    padding: 20px;
    border-radius: 5px;
  }
  td {
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
  }
  a:hover {
    color: black;
  }
`;

export const CampoBusca = styled.input`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 40px;
  margin-bottom: 20px;
  padding-left: 10px;
`;

import styled from 'styled-components';

export const TabelaContratos = styled.div`
  margin-left: 20px;
  margin-top: 50px;
  width: 95%;
  background-color: #eceff3;
  border-radius: 20px;
  padding: 30px;
  border: 3px solid white;
`;

export const Table = styled.table`
  font-size: 15px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  thead tr {
    margin-bottom: 5px;
    background-color: white;
    color: #4791ff;
  }

  tbody tr {
    background-color: #d0dcf1;
  }

  th {
    padding: 10px;
    border: 0px;
    border-right: 1px solid #4791ff;
  }

  th:last-child {
    border: 0px;
  }

  td {
    padding: 10px;
    border: 0px;
    text-align: center;
    color: #044099;
  }

  td:first-child {
    border: 1px solid #4791ff;
    color: #4791ff;
  }

  a:hover {
    color: black;
  }
`;

export const Status = styled.div`
  color: #4791ff;
  margin-top: 60px;
  margin-left: 20px;
`;

export const ContainerFlex = styled.div`
  display: flex;
`;

export const Total = styled.div`
  height: 170px;
  width: 170px;
  padding: 20px;
  margin-top: 10px;
  margin-right: 20px;
  background-image: linear-gradient(to bottom right, white, #dfe3eb);
  border: 3px solid white;
  border-radius: 20px;
  color: #4791ff;
  font-size: 20px;

  h5 {
    font-size: 50px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const NoPrazo = styled.div`
  height: 170px;
  width: 170px;
  padding: 20px;
  margin-top: 10px;
  margin-right: 20px;
  background-color: #d0dcf1;
  border: 3px solid white;
  border-radius: 20px;
  color: #4791ff;
  font-size: 20px;

  h5 {
    font-size: 50px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const Atencao = styled.div`
  height: 170px;
  width: 170px;
  padding: 20px;
  margin-top: 10px;
  margin-right: 20px;
  background-color: #f4f6b3;
  border: 3px solid white;
  border-radius: 20px;
  color: #4791ff;
  font-size: 20px;

  h5 {
    font-size: 50px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const Atrasado = styled.div`
  height: 170px;
  width: 170px;
  padding: 20px;
  margin-top: 10px;
  margin-right: 20px;
  background-color: #ffc5e1;
  border: 3px solid white;
  border-radius: 20px;
  color: #4791ff;
  font-size: 20px;

  h5 {
    font-size: 50px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

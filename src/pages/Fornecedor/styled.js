import styled from 'styled-components';

export const ContainerFornecedor = styled.div`
  height: 550px;
  width: 675px;
  background-color: #d9d9d9;
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 40px;
  padding: 30px;
  display: flex;
`;

export const ContainerImage = styled.div`
  height: 150px;
  width: 200px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 30px;
`;

export const ContainerBlock = styled.div`
  display: block;

  h2 {
    color: black;
    margin-bottom: 20px;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Tag = styled.div`
  height: 30px;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  margin-left: 15px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const ContainerOutros = styled.div`
  height: 100px;
  width: 400px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid black;
  margin-left: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: black;
`;

export const ContainerInformacoes = styled.div`
  height: 100px;
  width: 620px;
  background-color: gray;
  border: 1px solid black;
  border-radius: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Comentarios = styled.div`
  hr {
    margin-top: 20px;
    border: 2px solid gray;
  }

  h3 {
    margin-top: 10px;
    color: black;
  }
`;

export const ContainerComentario = styled.div`
  height: 100px;
  width: 620px;
  background-color: white;
  border: 1px solid black;
  font-size: 15px;
  border-radius: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;

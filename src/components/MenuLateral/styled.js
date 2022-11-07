import styled from 'styled-components';

export const ContainerFlex = styled.section`
  height: 100%;
  width: 225px;
  background-color: #d9d9d9;
  margin-top: 50px;
  padding: 70px 100px 70px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;

  div:hover {
    background-color: rgba(151, 151, 151, 80%);
  }

  a:hover {
    color: black;
  }
`;

export const ContainerBlock = styled.section`
  display: block;
`;

export const ContainerAbas = styled.div`
  padding: 30px 60px 30px 60px;
  background-color: #979797;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 15px;
  }
`;

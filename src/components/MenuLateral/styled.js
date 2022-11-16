import styled from 'styled-components';

export const ContainerPrincipalFlex = styled.section`
  height: 100vh;
  width: 170px;
  background-image: linear-gradient(to right, white, #dfe3eb);
  padding: 25px 0px 70px 0px;
  display: flex;
  justify-content: center;

  div:hover {
    background-color: rgba(255, 255, 255, 80%);
  }

  a:hover {
    color: black;
  }
`;

export const ContainerBlock = styled.section`
  display: block;
`;

export const ContainerAbas = styled.div`
  padding: 30px 50px 10px 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #4791ff;

  h2 {
    font-size: 15px;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

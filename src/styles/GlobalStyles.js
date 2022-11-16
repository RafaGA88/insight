import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    font-family: 'Poppins';
    font-style: normal;
    color: white;
    background-color: #dfe3eb;
  }

  html, border-style, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background: green;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 10px 20px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
    color: #4791ff;
  }

  ul{
    list-style: none;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const GlobalContainerBlock = styled.div`
  display: block;
  width: 100%;
`;

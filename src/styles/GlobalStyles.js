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
    font-family: sans-serif;
    color: white;
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
    color: white;
  }

  ul{
    list-style: none;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

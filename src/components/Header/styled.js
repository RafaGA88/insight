import styled from 'styled-components';

export const Logo = styled.h1`
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #979797;
  border-radius: 20px;
  margin-left: 20px;
  color: white;
  font-size: 26px;
  float: left;
  text-decoration: none;
`;

export const UlRight = styled.ul`
  display: inline;
  margin-left: 65%;
`;

export const Icons = styled.li`
  display: inline;
  padding: 19px;
  color: black;
  font-size: 27px;
`;

export const Dia = styled.li`
  display: inline;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #979797;
  border-radius: 20px;
`;

export const Nav = styled.nav`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  background-color: #d9d9d9;
  align-items: center;
  border-radius: 40px;
  z-index: 99;

  h1:hover {
    background-color: rgba(151, 151, 151, 80%);
    color: black;
  }

  a {
    color: black;
  }

  a:hover {
    color: white;
  }
`;

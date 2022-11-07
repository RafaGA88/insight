import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa';
import { Nav, UlRight, Logo, Dia, Icons } from './styled';

export default function Header() {
  return (
    <Nav>
      <NavLink to="/">
        <Logo>Logo</Logo>
      </NavLink>
      <UlRight>
        <Dia>07/11/2022</Dia>
        <Icons>
          <NavLink to="/">
            <FaBell />
          </NavLink>
        </Icons>
        <Icons>
          <NavLink to="/">
            <FaUser />
          </NavLink>
        </Icons>
      </UlRight>
    </Nav>
  );
}

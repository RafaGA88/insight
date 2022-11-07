import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerFlex, ContainerAbas, ContainerBlock } from './styled';

export default function MenuLateral() {
  return (
    <ContainerFlex>
      <ContainerBlock>
        <NavLink to="/">
          <ContainerAbas>
            <h2>Início</h2>
          </ContainerAbas>
        </NavLink>
        <NavLink to="/contratos_ativos">
          <ContainerAbas>
            <h2>Contratos Ativos</h2>
          </ContainerAbas>
        </NavLink>
        <NavLink to="/historico">
          <ContainerAbas>
            <h2>Histórico</h2>
          </ContainerAbas>
        </NavLink>
        <NavLink to="/contratar">
          <ContainerAbas>
            <h2>Contratar+</h2>
          </ContainerAbas>
        </NavLink>
      </ContainerBlock>
    </ContainerFlex>
  );
}

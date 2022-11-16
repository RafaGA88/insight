import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdHome, MdHistory, MdAccountBalanceWallet } from 'react-icons/md';
import {
  ContainerPrincipalFlex,
  ContainerAbas,
  ContainerBlock,
  ContainerFlex,
} from './styled';

export default function MenuLateral() {
  return (
    <ContainerPrincipalFlex>
      <ContainerBlock>
        <ContainerAbas>
          <ContainerBlock>
            <AiOutlineMenu />
          </ContainerBlock>
        </ContainerAbas>
        <NavLink to="/">
          <ContainerAbas>
            <ContainerBlock>
              <ContainerFlex>
                <MdHome />
              </ContainerFlex>
              <h2>Início</h2>
            </ContainerBlock>
          </ContainerAbas>
        </NavLink>
        <NavLink to="/contratos_ativos">
          <ContainerAbas>
            <ContainerBlock>
              <ContainerFlex>
                <MdAccountBalanceWallet />
              </ContainerFlex>
              <h2>Contratos</h2>
            </ContainerBlock>
          </ContainerAbas>
        </NavLink>
        <NavLink to="/historico">
          <ContainerAbas>
            <ContainerBlock>
              <ContainerFlex>
                <MdHistory />
              </ContainerFlex>
              <h2>Histórico</h2>
            </ContainerBlock>
          </ContainerAbas>
        </NavLink>
      </ContainerBlock>
    </ContainerPrincipalFlex>
  );
}

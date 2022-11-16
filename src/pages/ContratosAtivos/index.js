import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  TabelaContratos,
  Table,
  Status,
  Total,
  ContainerFlex,
  NoPrazo,
  Atencao,
  Atrasado,
} from './styled';

export default function ContratosAtivos() {
  return (
    <div>
      <Status>
        <h3>Status</h3>
        <ContainerFlex>
          <Total>
            <h4>Total</h4>
            <h5>46</h5>
          </Total>
          <NoPrazo>
            <h4>No Prazo</h4>
            <h5>35</h5>
          </NoPrazo>
          <Atencao>
            <h4>Atenção</h4>
            <h5>24</h5>
          </Atencao>
          <Atrasado>
            <h4>Atrasado</h4>
            <h5>12</h5>
          </Atrasado>
        </ContainerFlex>
      </Status>

      <TabelaContratos>
        <Table>
          <thead>
            <tr>
              <th>Fornecedor</th>
              <th>AF Correspondente</th>
              <th>COD Fornecedor</th>
              <th>Nota do Fornecedor</th>
              <th>Comprador</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NavLink to="/fornecedor/1">Fornecedor</NavLink>
              </td>
              <td>Material</td>
              <td>Local</td>
              <td>$$$</td>
              <td>Estrela</td>
              <td>Estrela</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/fornecedor/1">Fornecedor</NavLink>
              </td>
              <td>Material</td>
              <td>Local</td>
              <td>$$$</td>
              <td>Estrela</td>
              <td>Estrela</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/fornecedor/1">Fornecedor</NavLink>
              </td>
              <td>Material</td>
              <td>Local</td>
              <td>$$$</td>
              <td>Estrela</td>
              <td>Estrela</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/fornecedor/1">Fornecedor</NavLink>
              </td>
              <td>Material</td>
              <td>Local</td>
              <td>$$$</td>
              <td>Estrela</td>
              <td>Estrela</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/fornecedor/1">Fornecedor</NavLink>
              </td>
              <td>Material</td>
              <td>Local</td>
              <td>$$$</td>
              <td>Estrela</td>
              <td>Estrela</td>
            </tr>
          </tbody>
        </Table>
      </TabelaContratos>
    </div>
  );
}

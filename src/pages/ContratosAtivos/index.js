import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabelaContratos, Table, CampoBusca } from './styled';

export default function ContratosAtivos() {
  return (
    <TabelaContratos>
      <CampoBusca placeholder="Filtrar contratos ativos..." />
      <Table>
        <thead>
          <tr>
            <th>Fornecedor</th>
            <th>Material</th>
            <th>Local</th>
            <th>$$$</th>
            <th>Estrela</th>
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
          </tr>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">Fornecedor</NavLink>
            </td>
            <td>Material</td>
            <td>Local</td>
            <td>$$$</td>
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
          </tr>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">Fornecedor</NavLink>
            </td>
            <td>Material</td>
            <td>Local</td>
            <td>$$$</td>
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
          </tr>
        </tbody>
      </Table>
    </TabelaContratos>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabelaContratos, Table, CampoBusca } from './styled';

export default function Historico() {
  return (
    <TabelaContratos>
      <CampoBusca placeholder="Filtrar..." />
      <Table>
        <thead>
          <tr>
            <th>FORNECEDOR</th>
            <th>AF CORRESPONDENTE</th>
            <th>COD. FORNECEDOR</th>
            <th>COD. PIRAMIDE</th>
            <th>COMPRADOR</th>
            <th>RECEBIMENTO</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">FORNECEDOR</NavLink>
            </td>
            <td>AF CORRESPONDENTE</td>
            <td>COD. FORNECEDOR</td>
            <td>COD. PIRAMIDE</td>
            <td>COMPRADOR</td>
            <td>RECEBIMENTO</td>
            <td>VALOR</td>
          </tr>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">FORNECEDOR</NavLink>
            </td>
            <td>AF CORRESPONDENTE</td>
            <td>COD. FORNECEDOR</td>
            <td>COD. PIRAMIDE</td>
            <td>COMPRADOR</td>
            <td>RECEBIMENTO</td>
            <td>VALOR</td>
          </tr>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">FORNECEDOR</NavLink>
            </td>
            <td>AF CORRESPONDENTE</td>
            <td>COD. FORNECEDOR</td>
            <td>COD. PIRAMIDE</td>
            <td>COMPRADOR</td>
            <td>RECEBIMENTO</td>
            <td>VALOR</td>
          </tr>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">FORNECEDOR</NavLink>
            </td>
            <td>AF CORRESPONDENTE</td>
            <td>COD. FORNECEDOR</td>
            <td>COD. PIRAMIDE</td>
            <td>COMPRADOR</td>
            <td>RECEBIMENTO</td>
            <td>VALOR</td>
          </tr>
          <tr>
            <td>
              <NavLink to="/fornecedor/1">FORNECEDOR</NavLink>
            </td>
            <td>AF CORRESPONDENTE</td>
            <td>COD. FORNECEDOR</td>
            <td>COD. PIRAMIDE</td>
            <td>COMPRADOR</td>
            <td>RECEBIMENTO</td>
            <td>VALOR</td>
          </tr>
        </tbody>
      </Table>
    </TabelaContratos>
  );
}

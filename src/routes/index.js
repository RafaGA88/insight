import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Fornecedor from '../pages/Fornecedor';
import ContratosAtivos from '../pages/ContratosAtivos';
import Historico from '../pages/Historico';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contratos_ativos" component={ContratosAtivos} />
      <Route exact path="/historico" component={Historico} />
      <Route exact path="/fornecedor/:id" component={Fornecedor} />
    </Switch>
  );
}

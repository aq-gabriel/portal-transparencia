import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Agenda from '../pages/agenda';
import DoPortal from '../pages/estruturaPortal';
import PlanejamentoFiscal from '../pages/intrumentoPlanejamento';
import Manutencao from '../pages/manutencao';
import ReceitasDespesas from '../pages/receitasDespesas';
import Receitas from '../pages/receitas';
import Despesas from '../pages/despesas';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/agenda-prefeito" exact component={Agenda} />
    <Route path="/do-portal" exact component={DoPortal} />
    <Route path="/instrumento-planejamento" exact component={PlanejamentoFiscal} />
    <Route path="/manutencao" exact component={Manutencao} />
    <Route path="/receitas-despesas" exact component={ReceitasDespesas} />
    <Route path="/receitas-publicas" exact component={Receitas} />
    <Route path="/despesas-publicas" exact component={Despesas} />
  </Switch>
);

export default Routes;
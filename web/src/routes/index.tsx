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
import DespesasGerais from '../pages/despesasGerais';
import DespesasPessoal from '../pages/despesasPessoal';
import DespesasDiarias from '../pages/despesasDiarias';
import DespesasRepasseTransferencia from '../pages/despesasRepasseTransferencia';
import DespesasExtraorcamentaria from '../pages/despesasExtraorcamentaria';
import DespesasPagamentoRestosPagar from '../pages/despesasPagamentoRestosPagar';
import DespesasRepasseConcedido from '../pages/despesasRepasseConcedido';
import DespesasPagamentoFornecedor from '../pages/despesasPagamentoFornecedor';

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
    <Route path="/despesas-gerais" exact component={DespesasGerais} />
    <Route path="/despesas-pessoal" exact component={DespesasPessoal} />
    <Route path="/despesas-diarias" exact component={DespesasDiarias} />
    <Route path="/despesas-repasse-transferencia" exact component={DespesasRepasseTransferencia} />
    <Route path="/despesa-extraorcamentaria" exact component={DespesasExtraorcamentaria} />
    <Route path="/despesa-restos-pagar" exact component={DespesasPagamentoRestosPagar} />
    <Route path="/despesa-repasses-concedidos" exact component={DespesasRepasseConcedido} />
    <Route path="/despesa-pagamento-fornecedor" exact component={DespesasPagamentoFornecedor} />
  </Switch>
);

export default Routes;
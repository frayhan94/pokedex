import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const Pokedex = loadable(() => import('./container/Pokedex/index'));
const PokedexDetail = loadable(() => import('./container/Pokedex/Detail/index'));

function NoMatch() {
  return <div>Page not found</div>;
}

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Pokedex} />
      <Route path="/detail/:id" component={PokedexDetail} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export { Pokedex, PokedexDetail, NoMatch };

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import DataPolicyView from './views/DataPolicyView';
import MainView from './views/MainView';
import TeamView from './views/TeamView';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/data-policy' component={DataPolicyView} />
        <Route path='/team' component={TeamView} />
        <Route path='/' component={MainView} />
      </Switch>
    </div>
  );
}

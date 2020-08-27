import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import ContactView from './views/ContactView';
import DataPolicyView from './views/DataPolicyView';
import MainView from './views/MainView';
import TeamView from './views/TeamView';

export default function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Switch>
        <Route path='/contact' component={ContactView} />
        <Route path='/data-policy' component={DataPolicyView} />
        <Route path='/team' component={TeamView} />
        <Route path='/' component={MainView} />
      </Switch>
    </div>
  );
}

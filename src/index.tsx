import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import maadwalkTheme from './themes/MaadwalkTheme';

Amplify.configure(config);

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={maadwalkTheme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

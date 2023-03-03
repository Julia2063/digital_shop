import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './firebase';

import 'bulma/css/bulma.css';

import { App } from './App';
import { store } from './app/store';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      ,
    </Provider>,

  );

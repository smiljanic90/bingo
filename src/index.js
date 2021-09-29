import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ticketsStore from  './store/tickets.store'
import { Provider } from 'mobx-react';

const stores = {
  ticketsStore
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);


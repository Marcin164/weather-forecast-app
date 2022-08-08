import React from 'react';
import ReactDOM from 'react-dom';
import { DBConfig } from "./DBConfig"
import { initDB } from 'react-indexed-db';
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import { store } from './Redux/store.js'

initDB(DBConfig)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
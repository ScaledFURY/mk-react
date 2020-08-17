import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import loadSettings from './load_settings';
import ApiClient from './ApiClient';

const settings = loadSettings();
const apiClient = new ApiClient(settings);

ReactDOM.render(
  <React.StrictMode>
  <App {...settings} {...apiClient} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

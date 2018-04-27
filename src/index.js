import React from 'react';
import './style/index.less';
import { render } from 'react-dom';
import App from './App.jsx';
import stores from "./store";
import { Provider } from "mobx-react";

render(
  <Provider { ...stores }>
    <App />
  </Provider>
  , document.getElementById('root'));
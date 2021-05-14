import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LifeCycles, registerApplication, start } from "single-spa";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


registerApplication({
  name: "app-visualizar",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-visualizar"),
  activeWhen: "/visualizar"
});

registerApplication({
  name: "app-pagar",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-pagar"),
  activeWhen: "/pagar"
});

registerApplication({
  name: "app-listar",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-listar"),
  activeWhen: "/listar"
});

start();

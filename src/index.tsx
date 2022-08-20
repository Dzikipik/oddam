import React from 'react';
import { createRoot } from "react-dom/client";
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App';
import './scss/main.scss';


const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

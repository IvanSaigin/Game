import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReduxProvider } from './ReduxMeneger';
import { store } from './ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);


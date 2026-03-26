import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './app/providers/AppProvider';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
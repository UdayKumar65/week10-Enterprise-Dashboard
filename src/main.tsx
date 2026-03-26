import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './app/providers/AppProvider';
import Dashboard from './pages/Dashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <Dashboard />
  </AppProvider>
);
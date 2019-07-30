import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import Routes from './router';

function App() {
  return useRoutes(Routes);
}

export default App;

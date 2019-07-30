import React from 'react';
import './App.css';
import { Users } from './components/Users';
import Team  from './components/Team';


function App() {
  return (
    <div className="App">
      <Team></Team>
      <Users></Users>
    </div>
  );
}

export default App;

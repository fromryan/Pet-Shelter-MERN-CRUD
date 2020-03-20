import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Dash from './components/Dash';
import Create from './components/Create'

function App() {
  return (
    <div className="App">
      <h1 className="display-2">Pet Shelter</h1>
      <Wrapper/>
    </div>
  );
}

export default App;

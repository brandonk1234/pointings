import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './modules/authentication/containers/loginContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={LoginContainer} />
      </Router>
    </div>
  );
}

export default App;

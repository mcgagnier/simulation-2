import React, { Component } from 'react';
import './main.css';
import logo from './assets/auth_logo.png';
import reactDOM from 'react-dom';
import {Switch} from 'react-router-dom';
// import login from './components/Login';
import Router from './Router'

class App extends Component {
  render() {
    return (
     <div>
       {Router}
     </div>
    );
  }
} 

export default App;

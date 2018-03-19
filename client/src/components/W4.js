import React, { Component } from 'react';
import '../main.css';
import logo from '../assets/auth_logo.png';

class W4 extends Component {
  render() {
    return (
        
      <div className="Login">
      <h1>Wizard4</h1>
        <div className="login-bg">
        <img className="login-img" src={logo} />
        <p>Username</p>
        <input />
        <p>Password</p>
        <input />
        {/* <div>
          <button>Login</button>
          <button>Register</button>
        </div> */}
          
        </div>
      </div>
    );
  }
} 

export default W4;

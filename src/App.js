import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './Component/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Algo</NavbarBrand>
          </div>
        </Navbar>
        <Main />
      </div>
    );
  }
}

export default App;

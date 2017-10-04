import React, { Component } from 'react';

import Nav from './Nav';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Starbar",
          }
        }
        
        handleClick(name){
        
          this.setState({
            currentPage: name
          });
    }

    render() {
        let nav = {
            display: "flex",
            listStyle: "none",
          }
      return (
        <nav>
          <ul style={nav}>
            <Nav page="Starbar" active={this.state.currentPage} onClick={ (name) => this.handleClick(name)}/>
            <Nav page="Dropdown" active={this.state.currentPage} onClick={ (name) => this.handleClick(name)}/>
            <Nav page="Navbar" active={this.state.currentPage} onClick={ (name) => this.handleClick(name)}/>
          </ul>
        </nav>
      );
    }
  }
  
  export default Navbar;
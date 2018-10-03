import React, { Component } from 'react';
import './App.css';
import Movielist from './MovieList/Movielist';
import Navbar from "./NavBar/Navbar";
import Sidebar from "./SideBar/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar></Navbar>
      <Movielist></Movielist>
      <Sidebar></Sidebar>

      </div>
    );
  }
}

export default App;

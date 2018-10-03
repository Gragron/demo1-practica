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
        <Sidebar></Sidebar>
        <Movielist></Movielist>

      </div>
    );
  }
}

export default App;

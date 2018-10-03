import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">

                <ul>
                    <li className="logo"><a> Logo </a></li>
                    <li><a href="">Home</a></li>
                </ul> 

            </div>
        )
    }
}

export default Navbar;
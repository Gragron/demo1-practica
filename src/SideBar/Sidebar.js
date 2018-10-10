import React, { Component } from "react";
import "./Sidebar.css"

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <div className="sidebarscroll">
                    <ul className="nav">
                        <li> 
                            <a> Lista favoritos  </a> 
                            <ul className="sub-menu">
                                <li> { this.props.prueba }</li>
                                <li>Bottoms</li>
                                <li>Footwear</li>
                            </ul>
                        </li> 
                        <li> <a>Borrar todo</a> </li>
                        <li> <a>Detalles</a>  </li>
                    </ul>
                    
                </div>
            </div>            
        )
    }
}

export default Sidebar;
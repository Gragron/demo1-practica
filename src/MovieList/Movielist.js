// components import
import React, { Component } from "react";
import Movie from "./Movie/Movie"
import Sidebar from "../SideBar/Sidebar";

// css import
import "./Movielist.css"

class Movielist extends Component {

    constructor(){
        super();
        this.state = {
            movielist: []
        }
    }

    handleClickAddFavorites = (e, title) => {
        e.preventDefault();
        this.setState({ movielist: this.state.movielist.concat( title ) })
    }

    render(){
        return(
           <div className="content">
                {/* {require('./responsive.jpg') */}

                <div className="movielist">
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/latin-lover.jpeg" title="Como ser un Latin Lover" genre="Comedia" ></Movie>
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/rampage.jpeg" title="Rampage" genre="Acción, Aventura" ></Movie>
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/tom-raider.jpeg" title="Tom Raider" genre="Acción, Aventura" ></Movie>
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/next-gen.jpeg" title="Next Gen" genre="Animacion, Acción, Aventura" ></Movie>
                </div>
               
                <div className="movielist">
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/deadpool.jpeg" title="Deadpool" genre="Accion, Ciencia Ficción, Superhéroes"></Movie>
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/ant-man.jpeg" title="Ant-Man" genre="Accion, Ciencia Ficción, Superhéroes"></Movie>
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/wonder-woman.jpeg" title="Wonder Woman" genre="Accion, Fantasia, Aventura"></Movie>
                    <Movie onClick={(e, title) =>this.handleClickAddFavorites(e, title)} img="Images/mission-impossible.jpeg" title="MIssion Impossible" genre="Cine de espionaje"></Movie>

                    <ul>
                           {this.state.movielist.map( (movie, index) => <li key={index}> {movie}  </li> )}
                    </ul>
                </div>

                 <Sidebar prueba= {this.state.movielist} > </Sidebar>


           </div>
                        
        )
    }

}

export default Movielist;
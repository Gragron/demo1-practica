// components import
import React, { Component } from "react";
import Movie from "./Movie/Movie"

// css import
import "./Movielist.css"

class Movielist extends Component {

    render(){
        return(
           <div className="content">
                {/* {require('./responsive.jpg') */}

                <div className="movielist">
                    <Movie img="images/deadpool.jpeg" title="Como ser un Latin Lover" genre="Comedia" ></Movie>
                    <Movie img="../../../Images/rampage.jpeg" title="Rampage" genre="Acción, Aventura" ></Movie>
                    <Movie img="../../../Images/tom-raider.jpeg" title="Tom Raider" genre="Acción, Aventura" ></Movie>
                    <Movie img="../../../Images/next-gen.jpeg" title="Next Gen" genre="Animacion, Acción, Aventura" ></Movie>
                </div>
               
                <div className="movielist">
                    <Movie img="../../../deadpool.jpeg" title="Deadpool" genre="Accion, Ciencia Ficción, Superhéroes"></Movie>
                    <Movie img="../../../ant-man.jpeg" title="Ant-Man" genre="Accion, Ciencia Ficción, Superhéroes"></Movie>
                    <Movie img="../../../wonder-woman.jpeg" title="Wonder Woman" genre="Accion, Fantasia, Aventura"></Movie>
                    <Movie img="../../../mission-impossible.jpeg" title="MIssion Impossible" genre="Cine de espionaje"></Movie>
                </div>

           </div>
        )
    }

}

export default Movielist;
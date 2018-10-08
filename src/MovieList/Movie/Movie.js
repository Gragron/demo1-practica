// components import
import React, { Component } from "react";
import TitleMovie from "./TitleMovie/Titlemovie";
import TitleCategory from "./TitleCategory/Titlecategory";
import Detail from "./Detail/Detail";
import Favorite from "./Favorite/Favorite";
import Image from "./Image/image";

// css import
import "./Movie.css"

class Movie extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    handleClick (event, addPelicula) {

        this.state.movies.push(addPelicula);      
        this.setState(
            this.state
          )

    }


    render(){
        return(
            
            <div className="card">
                <div className="imgcard">
                    <Image img={this.props.img}></Image>
                </div>
                <div className="card-details">
                    <TitleMovie title={this.props.title}></TitleMovie>
                    <TitleCategory genre={this.props.genre}></TitleCategory>
                    <div>
                        <div className="options"> <Detail></Detail>  </div>
                        <div className="options" onClick={(e) => this.handleClick(e,this.props.title)}> <Favorite></Favorite> </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Movie;
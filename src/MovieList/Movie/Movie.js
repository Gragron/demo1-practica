// components import
import React, { Component } from "react";
import TitleMovie from "./TitleMovie/Titlemovie";
import TitleCategory from "./TitleCategory/Titlecategory";
import Detail from "./Detail/Detail";
import Favorite from "./Favorite/Favorite";

// css import
import "./Movie.css"

class Movie extends Component{
    render(){
        return(
            
            <div className="card">
                <div className="imgcard">

                </div>
                <div className="card-details">
                    <TitleMovie></TitleMovie>
                    <TitleCategory></TitleCategory>
                    <Detail></Detail> 
                    <Favorite></Favorite>
                </div>
            </div>
            
        )
    }
}

export default Movie;
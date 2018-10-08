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
                        <div className="options"> <Favorite></Favorite> </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Movie;
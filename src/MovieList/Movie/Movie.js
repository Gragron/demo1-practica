// components import
import React from "react";
import TitleMovie from "./TitleMovie/Titlemovie";
import TitleCategory from "./TitleCategory/Titlecategory";
import Detail from "./Detail/Detail";
import Favorite from "./Favorite/Favorite";
import Image from "./Image/image";

// css import
import "./Movie.css"

const Movie = (props) =>{

   return (
        <div className="card">
            <div className="imgcard">
                <Image img={props.img}></Image>
            </div>
            <div className="card-details">
                <TitleMovie title={props.title}></TitleMovie>
                <TitleCategory genre={props.genre}></TitleCategory>
                <div>
                    <div className="options"> <Detail></Detail>  </div>
                    <div className="options" onClick={ (e, title) => props.onClick(e, props.title) }> <Favorite></Favorite> </div>
                </div>
            </div>
        </div>
   ) 

}

export default Movie;
// components import
import React, { Component } from "react";
import Movie from "./Movie/Movie"

// css import
import "./Movielist.css"

class Movielist extends Component {

    render(){
        return(
           <div className="content">
                
                <div className="movielist">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>
               
                <div className="movielist">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>

                <div className="movielist">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>

                <div className="movielist">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>

           </div>
        )
    }

}

export default Movielist;
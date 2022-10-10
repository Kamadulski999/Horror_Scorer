import React, { useState } from "react";

import "./movie.css";

const Movie = (props) => {
   const { isClicked, setClicked, movieObj } = props;
   const closeWindow = () => {
      setClicked("false");
      console.log(movieObj);
   };
   return (
      <div className={`container-fluid && ${isClicked === "false" && "hide"}`}>
         <div className="movie-detail">
            <div className="movie-title">
               <div className="movie_title">{movieObj ? movieObj.original_title : ""}</div>
            </div>
            <div className="movie-info">
               <div className="movie_backdrop">
                  <img
                     className="movie-backdrop"
                     src={`https://image.tmdb.org/t/p/original${movieObj ? movieObj.backdrop_path : "Movie Page"}`}
                  />
               </div>
               <div className="movie-overview">
                  <div>
                     <span className="font-weight-bold">Movie Overview:</span> <br></br>
                     <br></br>
                     {movieObj ? movieObj.overview : ""}
                     <br></br>
                     <br></br>
                     <span>----------------------</span>
                     <br></br>
                     {movieObj ? "Release date: " + movieObj.release_date : "Release Date"}
                     <br></br>
                     <span>----------------------</span>
                     <br></br>
                     {movieObj ? movieObj.runtime + " mins" : "Run time"}
                  </div>
               </div>
            </div>
            <br></br> <br></br> <br></br>
            <div className="movie-comment">Movie Comments and Reviews Here??</div>
         </div>
         {/* <img id="single-movie" src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt=""></img> */}
         <button onClick={closeWindow} id="close">
            Close The Window
         </button>
      </div>
   );
};
export default Movie;

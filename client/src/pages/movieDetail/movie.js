import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
const APIKey = "8e8d1fb7683b829d728e204db461103b";

const Movie = () => {
   const [currentMovieDetail, setMovie] = useState();
   const { id } = useParams();

   useEffect(() => {
      getData();
      window.scrollTo(0, 0);
   }, []);

   const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8e8d1fb7683b829d728e204db461103b&language=en-US`)
         .then((res) => res.json())
         .then((data) => setMovie(data));
   };

   return (
      <div className="movie-detail">
         <div className="movie-title">
            <div className="movie_title">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
         </div>
         <div className="movie-info">
            <div className="movie_backdrop">
               <img
                  className="movie-backdrop"
                  src={`https://image.tmdb.org/t/p/original${
                     currentMovieDetail ? currentMovieDetail.backdrop_path : "Movie Page"
                  }`}
               />
            </div>
            <div className="movie-overview">
               <div>
                  <span className="font-weight-bold">Movie Overview:</span> <br></br>
                  <br></br>
                  {currentMovieDetail ? currentMovieDetail.overview : ""}
                  <br></br>
                  <br></br>
                  <span>----------------------</span>
                  <br></br>
                  {currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : "Release Date"}
                  <br></br>
                  <span>----------------------</span>
                  <br></br>
                  {currentMovieDetail ? currentMovieDetail.runtime + " mins" : "Run time"}
               </div>
            </div>
         </div>
         <br></br> <br></br> <br></br>
         <div className="movie-comment">Movie Comments and Reviews Here??</div>
      </div>
   );
};

export default Movie;

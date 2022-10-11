import React, { setState, useState} from 'react';
import movieArr from '../../utils/movieArr';
import "./card.css"

  
 



const MovieCards = (props) => { 
    const {isClicked, setClicked, setMovieObj} = props
    

    const singleMovie = function (e) {       
        setClicked("true");        
        let obj = movieArr.find(o => o.id === parseInt(e.target.id));              
        setMovieObj(obj)
            
    }
 

    return (
       
        <div className= {`container-fluid && ${isClicked === "true" && "hide"}`}>
            <div className="row">
                <div className="col-lg-12">                    
                    <div className="card-deck mt-3">
                        <div className="mt-3">
                            <div id="movie-card" className="row">{movieArr.map(movie => (  
                            <div key={movie.id.toString()} className="col-md-6 col-lg-4 col-xl-3 card-column">
                                <div  className="movie-card card">
                                    <div onClick={singleMovie} id={movie.id} className="card-body p-2" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}></div>
                                </div>
                            </div>
                    ))} </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>





                            

        
           
        )} 



export default MovieCards

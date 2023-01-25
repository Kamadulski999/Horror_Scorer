import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import "./card.css"

  
 



const MovieCards = ({movieObj, setMovieObj}) => { 
    const [movieArr, setMovieArr] = useState([]);

    const singleMovie = function (e) {        
        let obj = movieArr.find(o => o.id === parseInt(e.target.id));              
        setMovieObj(obj);
        console.log(movieObj);        
    }

    var fetchRequest = function() {

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=8e8d1fb7683b829d728e204db461103b&language=en-US&sort_by=popularity.desc&with_genres=27')
        .then(function(response) {
          response.json().then(function(data) {         
          
        setMovieArr(data.results); 
          }          
         )}   
      )}
      fetchRequest();

    if(movieArr.length === 0) {
        return (
            <h3>Loading......</h3>
        
        )
    } else {
    return (
       
        <div className= "container-fluid">
            <div className="row">
                <div className="col-lg-12">                    
                    <div className="card-deck mt-3">
                        <div className="mt-3">
                            <div id="movie-card" className="row">{movieArr.map(movie => (  
                            <div key={movie.id.toString()} className="col-md-6 col-lg-4 col-xl-3 card-column">
                                <Link to="/movie" onClick={singleMovie}><div  className="movie-card card">
                                <div  id={movie.id} className="card-body p-2" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}></div>                                    
                                </div>
                                </Link>
                            </div>
                    ))} </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>





                            

                            
           
        )} 
    }



export default MovieCards

import {Link} from 'react-router-dom';
import ThoughtForm from "../../components/ThoughtForm";
import ThoughtList from "../../components/ThoughtList";

import "./movie.css";

const Movie = ({ movieObj, thoughts }) => {

   console.log(movieObj);
     
   return (
      <>
      <div className="container-fluid">
         <div className="movie-detail">
            <div className="movie-title">
               <div className="movie_title">{movieObj ? movieObj.original_title : ""}</div>
            </div>
            <div className="movie-info">
               <div className="movie_backdrop">
                  <img
                     className="movie-backdrop"
                     src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  alt=""
                  />
               </div>
             
               <div className="movie-overview">
                  <div>
                  <br></br>
                     <h3 className="font-weight-bold">Movie Overview:</h3> <br></br>
                     <br></br>
                     {movieObj ? movieObj.overview : ""}
                     <br></br>
                     <br></br>
                     <span>----------------------</span>
                     <br></br>
                     Release date:<p>{movieObj.release_date }</p>
                     IMDB Rating:<p>{movieObj.vote_average}</p>                      
                     <span>----------------------</span>
                     <br></br>                    
                  </div>                  
               </div>
            </div>
            <Link to="/"><div className="mt-3"> <button id="close">
            Return to Main Page
         </button></div></Link>
            <br></br> <br></br> <br></br>
           
          
         </div>
        
       
      </div>

   </>
   );
};
export default Movie;


{/* <div className="movie-comment">      <div>
<ThoughtForm 
movieObj = {movieObj}
></ThoughtForm>
<ThoughtList 
thoughts = {thoughts}     
movieObj = {movieObj}      
></ThoughtList>
</div></div> */}
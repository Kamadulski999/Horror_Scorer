import React from 'react';
import ThoughtList from '../ThoughtList';
import ThoughtForm from '../ThoughtForm'



 
const Movie = (props) => { 
    const {isClicked, setClicked, movieObj, thoughts} = props
    const closeWindow = () => {
    setClicked("false")  
   
}   
    return (
       
   <>
      <div className= {`container-fluid && ${isClicked === "false" && "hide"}`}>
        <div>
         <img id="single-movie" src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt=""></img>
         <button onClick={closeWindow} id="close">Close The Window</button>       
        </div>
      <div>
      <ThoughtForm 
      movieObj = {movieObj}
      isClicked = {isClicked} 
      setClicked = {setClicked} 
      ></ThoughtForm>
      <ThoughtList 
      thoughts = {thoughts}
      isClicked = {isClicked}
      movieObj = {movieObj}      
      ></ThoughtList>
      </div>  
      </div>

      
   </>
  

    )
}
export default Movie

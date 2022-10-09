import React, { useState } from 'react';



 
const Movie = (props) => { 
    const {isClicked, setClicked, movieObj} = props
    const closeWindow = () => {
    setClicked("false")
    console.log(movieObj)
}
    return (
       
        <div className= {`container-fluid && ${isClicked === "false" && "hide"}`}>
            <img id="single-movie" src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt=""></img>
           <button onClick={closeWindow} id="close">Close The Window</button>
       
    </div>

    )
}
export default Movie

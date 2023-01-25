import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import MovieCards from '../components/MovieCards';



const Home = ({movieObj, setMovieObj}) => {   
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];   

  return (
<main> 
    <div className={`col-12 mb-3}`}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-row justify-space-between">      
        <MovieCards        
        movieObj = {movieObj} setMovieObj = {setMovieObj}        
        ></MovieCards>                      
      </div>
      )}
    </div>   
</main>
  );
};

export default Home;

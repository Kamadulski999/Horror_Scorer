import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

<<<<<<< HEAD
const ThoughtForm = () => {
=======
const ThoughtForm = (props) => {
   let {movieObj} = props  
  
>>>>>>> pre-production
    const [addThought, { error }] = useMutation(ADD_THOUGHT, {
        update(cache, { data: { addThought } }) {
      
            // could potentially not exist yet, so wrap in a try/catch
          try {
            // update me array's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
            });
          } catch (e) {
            console.warn("First thought insertion by user!")
          }
      
          // update thought array's cache
          const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
          cache.writeQuery({
            query: QUERY_THOUGHTS,
            data: { thoughts: [addThought, ...thoughts] },
          });
        }
<<<<<<< HEAD
=======

        
>>>>>>> pre-production
      });
    const [thoughtText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
      };
<<<<<<< HEAD

      const handleFormSubmit = async event => {
        event.preventDefault();
      
        try {
          // add thought to database
          await addThought({
            variables: { thoughtText }
          });
      
=======
    

    let movie_id = movieObj.id
    console.log(movieObj.id)

      const handleFormSubmit = async event => {        
        event.preventDefault()      
        try {
          // add thought to database
          
          await addThought({
            variables: { thoughtText, movie_id } 
          });         
>>>>>>> pre-production
          // clear form value
          setText('');
          setCharacterCount(0);
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <div>
        <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <form className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>
            <textarea
<<<<<<< HEAD
            placeholder="Here's a new thought..."
=======
            placeholder="Leave a Comment..."
>>>>>>> pre-production
            value={thoughtText}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
            ></textarea>
<<<<<<< HEAD
            <button className="btn col-12 col-md-3" type="submit">
=======
            <button className="btn col-1 col-md-3" type="submit">
>>>>>>> pre-production
            Submit
            </button>
        </form>
        </div>
    );
};

export default ThoughtForm;
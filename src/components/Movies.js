import React from "react";
import { movies } from "../data";

function Movies() {
  return(
   <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {movies.map((movie, index)=>{
      return (
        <div key ={index}>
        title={movie.title}
        time= {movie.time}
          <ul>
            <li>{movie.genres}</li>
          </ul>
      </div>
      )
    })}
  </div>
)}

export default Movies;

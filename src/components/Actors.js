import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>{/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>{
        return(
          <div key={index}>
          name={actor.name}
          <ul>
             <li>{actor.movies}</li>
          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors;

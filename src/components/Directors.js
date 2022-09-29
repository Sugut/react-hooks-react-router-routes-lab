import React from "react";
import { directors } from "../data";

function Directors() {
    return (
   <div>{/*{code here}*/}
     <h1>Directors Page</h1>
     {directors.map((director, index)=>{
        return (
            <div key = {index}>
              name = {director.name}
              <ul>
                <li>{director.movies}</li>
              </ul>
            </div>
         )})}
  </div>
)}

export default Directors;

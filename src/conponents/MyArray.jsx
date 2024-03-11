
//import react and react hook use state
import React, { useState } from 'react';

//Function called MyArray
function MyArray() {
     //
     const [movies, setMovie] = useState(["Oppenheimer","Barbie","The Batman"]);

     function handleAddMovie(){
        const newMovie = document.getElementById("movieInput").value;
        document.getElementById("movieInput").value = "";

        setMovie( updatedMovies => [...updatedMovies, newMovie]);
     }

      function handlRemoveMovie(index){
        setMovie(movies.filter((_, i) => i !== index));
     }

    return ( <div>
        <h2>My Movies</h2>
        <ul>
            {movies.map((movie, index) => 
            <li key={index} onClick={() => handlRemoveMovie(index)}>
                {movie}
            </li>)}
        </ul>
        <input type='text' id='movieInput' placeholder='Add a movie'></input>
        <button onClick={handleAddMovie}>Add a movie</button>
    </div> );
}

export default MyArray;
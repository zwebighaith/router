import { useState, useEffect } from "react";
import Movies from './Movies'

const Moviescontainer = ({movie,inputValue}) => {
    const [filtredMovies,setFiltredMovies] = useState (movie)

    useEffect(() => {
        setFiltredMovies(movie.filter(movie => {
            return movie.name.toLowerCase().includes( inputValue.toLowerCase());
        }))

    },[inputValue]
    );


  return (
    <div>
        <Movies movie={filtredMovies} />
    </div>
  )
}

export default Moviescontainer
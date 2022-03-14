import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
const MovieDescription = ({ movie }) => {
  const { MovieDescription, setMovieDescription } = useState();
  const { id } = useParams();
  useEffect(() => {
    setMovieDescription(movie.find((movie) => movie.id == id));
  }, []);
  return (
    <div>
      <h1>{MovieDescription.description}</h1>
      <Reactplayer ur1={MovieDescriptiont.trailer}></Reactplayer>
    </div>
  );
};

export default MovieDescription;

import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <Link to={`/MovieDescription/${movie.id}`}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "70%",
        margin: "auto auto",
      }}
    >
      {movie.map((movie) => {
        return (
          <div 
          key={movie.id} >

            <img src={movie.img} alt={movie.name} height={250} width={180} />
            <h4>{movie.name}</h4>
            <ReactStars
              count={5}
              edit={false}
              value={movie.rating}
              size={24}
              activeColor="#ffd700"
            />
            ,
          </div>
        );
      })}
    </div>
    </Link>
  );
};

export default Movies;

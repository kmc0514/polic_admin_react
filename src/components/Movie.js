import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import "./Movie.css";

function Movie({ id, poster, title, sum }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          id,
          poster,
          title,
          sum
        }
      }}
    >
      <li className="movie__item">
        <div className="poster">
          <img src={poster} alt={title}></img>
        </div>
        <div className="title">{title}</div>
      </li>
    </Link>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  poster: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  sum: Proptypes.string.isRequired
};

export default Movie;

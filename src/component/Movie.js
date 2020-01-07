import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, poster, title, sum, bg }) {
  return (
    <Link
      to={{
        pathname: `/detail/${id}`,
        state: {
          id,
          poster,
          title,
          sum,
          bg
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

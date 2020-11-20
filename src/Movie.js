import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title, year, poster, summary, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="mobie__title">{title}</h3>
                <h5 className="mobie__year">{year}</h5>
                <ul className="movie__genres">{genres && genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
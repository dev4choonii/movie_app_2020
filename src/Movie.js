import React from "react"
import PropTypes from "prop-types"

function Movie({title, year, runtime, rating, poster}) {
    return (
        <div>
            Title : {title}({year}) / {runtime}<br/>
            Rate : {rating}<br/>
            <img src={poster} alt={title}/>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    // poster: PropTypes.string.isRequired
}

export default Movie;
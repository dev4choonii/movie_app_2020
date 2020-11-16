import React from "react";

const movieList = [
    {
        id : "1",
        movieTitle : "Emily in Paris",
        moviePoster : "https://cdn.cinematerial.com/p/297x/045z1v1t/emily-in-paris-movie-poster-md.jpg?v=1598976376",
        rating : 4.7
    },
    {
        id : "2",
        movieTitle : "Vikings",
        moviePoster : "https://images-na.ssl-images-amazon.com/images/I/51VP7qnSjWL._AC_.jpg",
        rating : 5.0

    },
    {
        id : "3",
        movieTitle : "Interstellar",
        moviePoster : "https://images-na.ssl-images-amazon.com/images/I/61ApVtPce5L._AC_SY879_.jpg",
        rating : 4.3
    }
];

function Movie({movieTitle, moviePoster, rating}) {
    return (
        <div>
            Title : {movieTitle}<br/>
            Rate : {rating}<br/>
            Poster<br/>
            <img src={moviePoster} alt={movieTitle} width="297px" height="440px"/>
        </div>
    );
}

Movie.propTypes = {
    movieTitle : PropTypes.string.isRequired,
    moviePoster : PropTypes.string.isRequired,
    rating : PropTypes.number
}

function RenderMovie() {
    return (
        movieList.map(movie => <Movie key={movie.id} movieTitle={movie.movieTitle} moviePoster={movie.moviePoster} rating={movie.rating}/>)
    )
}

function App() {
  return (
    <RenderMovie/>
  )
}

export default App;

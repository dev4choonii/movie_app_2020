import React from "react";

const movieList = [
    {
        id : "1",
        movieTitle : "Emily in Paris",
        movieThumbnail : "https://cdn.cinematerial.com/p/297x/045z1v1t/emily-in-paris-movie-poster-md.jpg?v=1598976376"
    },
    {
        id : "2",
        movieTitle : "Vikings",
        movieThumbnail : "https://images-na.ssl-images-amazon.com/images/I/51VP7qnSjWL._AC_.jpg"
    },
    {
        id : "3",
        movieTitle : "Interstellar",
        movieThumbnail : "https://images-na.ssl-images-amazon.com/images/I/61ApVtPce5L._AC_SY879_.jpg"
    }
];

function Movie({movie}) {
    return (
        <div>
            Title : {movie.movieTitle}<br/>
            Poster<br/>
            <img src={movie.movieThumbnail} alt={movie.movieTitle}/>
        </div>
    );
}

function RenderMovie() {
    return (
        movieList.map(movie => <Movie key={movie.id} movie={movie}/>)
    )
}

function App() {
  return (
    <RenderMovie/>
  )
}

export default App;

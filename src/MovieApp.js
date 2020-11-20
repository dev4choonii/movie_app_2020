import React from "react";
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";

class MovieApp extends React.Component {
    state = {
        isLoading: true,
        movieList: []
    }

    getMovieList = async () => {
        let {data: {data: {movies}}} = await Axios.get("https://yts-proxy.now.sh/list_movies.json");

        this.setState({
            isLoading: false,
            movieList: movies
        })
    }

    componentDidMount() {
        this.getMovieList()
    }

    render() {
        let {isLoading, movieList} = this.state;
        return (
            <section className="container">
                {isLoading
                    ? (
                        <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    )
                    : (
                        <div className="movies">
                            {movieList.map(movie => {
                                return (
                                    <Movie key={movie.id}
                                           title={movie.title}
                                           year={movie.year}
                                           poster={movie.medium_cover_image}
                                           summary={movie.summary}
                                           genres={movie.genres}/>
                                )
                            })}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default MovieApp;
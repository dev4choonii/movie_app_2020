import React from "react";
import Axios from "axios";
import Movie from "./Movie";

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
        });
    }

    componentDidMount() {
        this.getMovieList();
    }

    render() {
        let {isLoading, movieList} = this.state;
        return (
            <div>
                {isLoading
                    ? 'Loading...'
                    : movieList.map(movie => {
                        return (
                            <Movie key={movie.id}
                                   rating={movie.rating}
                                   runtime={movie.runtime}
                                   year={movie.year}
                                   poster={movie.medium_cover_image}
                                   title={movie.title}/>
                        );
                    })
                }
            </div>
        )
    }
}

export default MovieApp;
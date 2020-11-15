import React from "react";
import Axios from "axios";

class MovieApp extends React.Component {
    state = {
    }

    getMovieList = async () => {
        this.setState({
            movieList : await Axios.get("")
        })
    }

    render() {
        return (
            <div>Hello Movie App</div>
        )
    }
}

export default MovieApp;
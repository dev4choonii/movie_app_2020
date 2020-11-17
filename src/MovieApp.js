import React from "react";
import Axios from "axios";

class MovieApp extends React.Component {
    state = {
        isLoading : true
        // movieList : []
    }

    getMovieList = async () => {
        this.setState({
                movieList: await Axios.get("https://yts-proxy.now.sh/list_movies.json")
            });
    }

    componentDidMount() {
        this.getMovieList();
    }

    render() {
        return (
            <div>{this.state.isLoading ? 'Loading...' : 'Hello Movie App'}</div>
        )
    }
}

export default MovieApp;
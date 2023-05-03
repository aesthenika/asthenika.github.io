import React from 'react';
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Roller } from 'react-spinners-css';




class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=9520e729&s=the_lord')
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        this.setState({loading : true});
        fetch(`http://www.omdbapi.com/?apikey=9520e729&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then((response) => response.json())
            .then ((data) => this.setState({ movies: data.Search, loading: false }));
    };

    render() {
        const { loading } = this.state;
        const style = { position: "fixed", left: "50%", transform: "translate(-50%, -50%)" };

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                loading ? <Roller/> : <Movies movies={this.state.movies} />
            }
        </main>
    }
}
export { Main };
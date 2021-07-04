import React from "react";
import { data } from "./data";
import { addMovies, ShowFavourite } from "./actions";
import Navbar from "./Navbar.js";
import MovieCard from "./MovieCard.js";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    store.dispatch(addMovies(data));
  }
  isMovie(movie) {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index != -1) {
      return true;
    }
    return false;
  }
  changeTab(val) {
    this.props.store.dispatch(ShowFavourite(val));
  }

  render() {
    console.log("this.props", this.props);
    console.log("this.props.store", this.props.store);
    const { movies, Search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    console.log("abc", this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar Search={Search} dispatch={this.props.store.dispatch} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFav={this.isMovie(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies"> No movies to show !!!</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import { data } from "./data";
import { addMovies } from "./actions";
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

  render() {
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

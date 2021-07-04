import React from "react";
import { addMovieToList, handleMovieSearch } from "./actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showSearchResult:false,
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResult: false,
    });
  };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    // const { showSearchResult } = this.state;
    const { result, showSearchResult } = this.props.Search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search{" "}
          </button>
          {/* {showSearchResult ? ( */}
          {showSearchResult && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} />
                <div className="movie-info">
                  <span>{result.Title} </span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    ADD TO MOVIES{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* // ) : null} */}
        </div>
      </div>
    );
  }
}

export default Navbar;

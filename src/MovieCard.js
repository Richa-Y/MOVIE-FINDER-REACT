import React from "react";
import { addFavourite } from "./actions";
import { RemoveFavourite } from "./actions";
class MovieCard extends React.Component {
  handleClick = () => {
    console.log("aa");
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleUnFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(RemoveFavourite(movie));
  };
  render() {
    const { movie, isFav } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating} </div>
            {isFav ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavClick}
              >
                UnFavourites{" "}
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handleClick}>
                Favourites{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

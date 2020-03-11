import React from "react";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <img
          src="https://image.tmdb.org/t/p/w200/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg?api_key=194bc39d935b6a1f21c103c3ca4d7f27"
          width="120"
        />
        <div className="card-content">
          <h2 className="rating-text">
            7.9<span className="secondary-text">/10</span>
          </h2>
          <h2 className="movie-title-text">
            Jumanji: The Next Level{" "}
            <span className="secondary-text genre-text">
              Action &bull; Adventure &bull; Drama &bull; Fantasy
            </span>
          </h2>
          <p className="secondary-text">Playing On: Netflix</p>
          <a className="secondary-text trailer-a" href="asminbudha.github.io">
            Watch Trailer
          </a>
        </div>
      </div>
    );
  }
}

export default MovieCard;

import React from "react";
import MovieCard from "../movieCard/MovieCard";

class CategoryWrapper extends React.Component {
  render() {
    return (
      <div className="category-wrapper">
        <h1 className="category-title-text">Trending TV Shows</h1>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}

export default CategoryWrapper;

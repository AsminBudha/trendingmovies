import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../movieCard/MovieCard";

class CategoryWrapper extends React.Component {
  render() {
    return (
      <div className="category-wrapper">
        <h1 className="category-title-text">{this.props.title}</h1>
        <ul>
          {this.props.dataList.map(data => {
            return (
              <li key={data.id}>
                <MovieCard data={data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

CategoryWrapper.propTypes = {
  title: PropTypes.string,
  dataList: PropTypes.array
};

export default CategoryWrapper;

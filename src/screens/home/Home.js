import React from "react";

import CategoryWrapper from "../../components/categoryWrapper/CategoryWrapper";
import { categories } from "../../configs/constant";
import Axios from "axios";
import { fetchTrendingByKey } from "../../services/fetchTrendings";
import { fetchGenreByCategoryKey } from "../../services/fetchGenre";
import { arrayToObjectById } from "../../utils/objectUtility";
import { fetchExternalIdsByMovieId } from "../../services/fetchExternal";

class Home extends React.Component {
  state = {
    currentPage: 1,
    isLoading: true,
    [categories[0].key]: {},
    [categories[1].key]: {},
    errorMessage: null
  };

  componentDidMount() {
    this.fetchData();
  }

  mergeExternalIdWithMovieData = (movieExternal, movieData) => {
    return movieData.map((movie, index) => {
      movie.external_ids = movieExternal[index];

      return movie;
    });
  };

  fetchData = async () => {
    try {
      let movieData = await this.fetchMovieData();

      try {
        let genreData = await this.fetchGenre();

        genreData.forEach((genre, index) => {
          localStorage.setItem(
            categories[index].key,
            JSON.stringify(arrayToObjectById(genre.data.genres))
          );
        });
      } catch (err) {
        //TODO: Handle case when unable to fetch genre data
        console.log(err);
      }

      let tvDataWithExternalIds = movieData[0].data.results;

      let movieDataWithExternalIds = movieData[1].data.results;

      try {
        let movieExternalId = await this.fetchExternalIds(
          movieData[0].data.results
        );

        let tvExternalId = await this.fetchExternalIds(
          movieData[1].data.results
        );

        movieDataWithExternalIds = this.mergeExternalIdWithMovieData(
          movieExternalId.map(item => item.data),
          movieDataWithExternalIds
        );
        tvDataWithExternalIds = this.mergeExternalIdWithMovieData(
          tvExternalId.map(item => item.data),
          tvDataWithExternalIds
        );
      } catch (err) {
        //TODO: Handle case when error in external ids
        console.log(err);
      }

      this.setState({
        isLoading: false,
        errorMessage: null,
        [categories[0].key]: {
          ...movieData[0].data,
          results: tvDataWithExternalIds
        },
        [categories[1].key]: {
          ...movieData[1].data,
          results: movieDataWithExternalIds
        }
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        errorMessage: "Could not fetch data"
      });
    }
  };

  fetchGenre = () => {
    return Axios.all(
      categories.map(category => fetchGenreByCategoryKey(category.key))
    );
  };

  fetchMovieData = () => {
    return Axios.all(categories.map(item => fetchTrendingByKey(item.key)));
  };

  fetchExternalIds = movieList => {
    return Axios.all(
      movieList.map(async movie =>
        fetchExternalIdsByMovieId(movie.id)
          .then(res => res)
          .catch(() => ({ data: {} }))
      )
    );
  };

  render() {
    if (this.state.isLoading) {
      return <div className="container error-text">Loading...</div>;
    } else if (this.state.errorMessage) {
      return (
        <div className="container error-text">{this.state.errorMessage}</div>
      );
    }

    return (
      <div className="container">
        <CategoryWrapper
          title={categories[0].title}
          dataList={this.state[categories[0].key].results || []}
        />
        <CategoryWrapper
          title={categories[1].title}
          dataList={this.state[categories[1].key].results || []}
        />
      </div>
    );
  }
}

export default Home;

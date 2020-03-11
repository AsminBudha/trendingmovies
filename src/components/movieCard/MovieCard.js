import React from "react";
import PropTypes from "prop-types";
import { IMAGE_THUMBNAIL_URL, IMDB_URL } from "../../configs/api";
import { youtubeSearchQueryGenerator } from "../../utils/queryGenerator";
import { getGenreText } from "../../utils/extractGenre";

class MovieCard extends React.Component {
  render() {
    const {
      name,
      title,
      genre_ids,
      media_type,
      poster_path,
      vote_average,
      external_ids
    } = this.props.data;
    const movieTitle = name || title;

    return (
      <div className="card-wrapper">
        <a
          target="_"
          href={
            external_ids && external_ids.imdb_id
              ? IMDB_URL.replace(":imdbId", external_ids.imdb_id)
              : "#"
          }
          title={movieTitle}
        >
          <img
            alt={movieTitle}
            src={IMAGE_THUMBNAIL_URL.replace(":imageId", poster_path)}
            width="120"
          />
        </a>

        <div className="card-content">
          <h2 className="rating-text">
            {vote_average}
            <span className="secondary-text">/10</span>
          </h2>
          <h2 className="movie-title-text">
            <a
              target="_"
              href={
                external_ids && external_ids.imdb_id
                  ? IMDB_URL.replace(":imdbId", external_ids.imdb_id)
                  : "#"
              }
              title={movieTitle}
            >{`${movieTitle} `}</a>
            <span className="secondary-text genre-text">
              {genre_ids.reduce((acc, id) => {
                const genre = getGenreText(media_type, id);
                if (genre) {
                  if (acc) {
                    acc += ` \u2022 ${genre} `;
                  } else {
                    acc += ` ${genre} `;
                  }
                }

                return acc;
              }, "")}
            </span>
          </h2>
          <p className="secondary-text">Playing On: Netflix</p>
          <a
            target="_"
            className="secondary-text trailer-a"
            href={youtubeSearchQueryGenerator(movieTitle)}
            title={movieTitle}
          >
            Watch Trailer
          </a>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  data: PropTypes.object
};

export default MovieCard;

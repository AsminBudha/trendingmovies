export const IMAGE_THUMBNAIL_URL = "https://image.tmdb.org/t/p/w200/:imageId";

export const IMDB_URL = "https://www.imdb.com/title/:imdbId";

export const TRENDING_URL = `${process.env.REACT_APP_BASE_URL}/trending/:key/day`;

export const GENRE_URL = `${process.env.REACT_APP_BASE_URL}/genre/:categoryKey/list`;

export const EXTERNAL_ID_URL = `${process.env.REACT_APP_BASE_URL}/movie/:movieId/external_ids`;

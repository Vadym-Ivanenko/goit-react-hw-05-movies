import axios from 'axios';

const API_KEY = '045729310d7d979f0a4752594b43807c';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const getSearchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  );
  return response.data.results;
};

export const getMovieDetails = async movieById => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieById}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async movieById => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieById}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async movieById => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieById}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

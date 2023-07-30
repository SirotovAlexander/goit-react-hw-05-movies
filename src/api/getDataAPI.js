import axios from 'axios';
// const API_KEY =
// 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGMzYzY4MGExNGI5ZWZiN2U5YjlhNWQ2ZmQzZGNlMyIsInN1YiI6IjY0YzNmNDE4MDI4ZjE0MDBlZTlkOTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zlpBdQHE5iERq6cscX7pgpnknyuueyRqCcB7RBnCZlA';
// const BASE_LINK = 'https://api.themoviedb.org/3';
// const END_POINT = '/trending/movie/day?';
const API_KEY = 'api_key=6dc3c680a14b9efb7e9b9a5d6fd3dce3';

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?${API_KEY}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?${API_KEY}`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?${API_KEY}`
  );
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?${API_KEY}`
  );
  return response.data;
};

export const getMovieBySearch = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&${API_KEY}`
  );
  return response.data;
};

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b1182fc6a17a9d116199a570dc720d86';

// самые популярные фильмы
export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}
// поиск фильмов
export async function fetchMoviesSearch(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
}
// информация о фильме
export async function fetchMoviesById(id) {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}
// информация об актёрах
export async function fetchMoviesCast(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}
// отзывы о фильмах
export async function fetchReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
}

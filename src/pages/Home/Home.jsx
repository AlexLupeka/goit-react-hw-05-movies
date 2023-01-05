import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import { fetchTrendingMovies } from '../../Api/Api';
import Loader from '../../components/Loader/Loader';
import { HomeList, HomeInput } from './HomePage.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies().then(movies => {
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <PageHeader>Trending today</PageHeader>
      {loading && <Loader />}
      <HomeList>
        {movies.map(movie => (
          <HomeInput key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </HomeInput>
        ))}
      </HomeList>
    </>
  );
}

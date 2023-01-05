import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from '../../components/Searchbar/Searchbar';
import Loader from '../../components/Loader/Loader';
import { fetchMoviesSearch } from '../../Api/Api';
import { MoviesList, MoviesInput } from './MoviesPage.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleFormSubmit = query => {
    setQuery(query);
    setSearchParams({ query: query });
    setData([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    fetchMoviesSearch(query).then(data => {
      if (data.length === 0) {
        toast.error(
          `Sorry, the movie with the title ${query}is not found. Enter another name`
        );
      }
      setData(data);
      setLoading(false);
    });
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {data && (
        <MoviesList>
          {data.map(data => (
            <MoviesInput key={data.id}>
              <Link to={`${data.id}`} state={{ from: location }}>
                {data.title ? data.title : data.name}
              </Link>
            </MoviesInput>
          ))}
        </MoviesList>
      )}
    </>
  );
}

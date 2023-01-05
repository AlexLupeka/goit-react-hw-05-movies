import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { fetchMoviesById } from '../../Api/Api';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import {
  MovieDetailsButton,
  MovieDetailsCard,
  MovieDetailsImg,
  MovieDetailsTitle,
  MovieDetailsText,
  MovieDetailsGenre,
} from './MovieDetailsPage.styled.jsx';
import style from '@emotion/styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMoviesById(movieId)
      .then(movie => {
        setMovie(movie);
        setLoading(false);
      })
      .catch(error => {
        toast(`${error}`);
        setLoading(false);
      });
  }, [movieId]);

  const goBack = () => {
    navigate(
      location.state
        ? `${location.state.from.pathname}${location.state.from.search}`
        : '/'
    );
  };

  const StyledLink = style(NavLink)`
    display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #1a2d5e;
  font-size: 16px;

    &.active {
   width: 80px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  margin: auto 0 auto 0;
  background-color: #ff6b08;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  color: white;
  outline: none;
  transition: all 250ms ease-in-ou;
  &:hover {
  background-color: #FF0000;
}
  `;

  return (
    <>
      <MovieDetailsButton type="button" onClick={goBack}>
        Go back
      </MovieDetailsButton>
      <br />
      {loading && <Loader />}
      {movie && (
        <>
          <MovieDetailsCard>
            <MovieDetailsImg
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <MovieDetailsTitle>
                {movie.title ? movie.title : movie.name}
              </MovieDetailsTitle>
              <MovieDetailsText>
                User score: {movie.vote_average * 10}%
              </MovieDetailsText>
              <MovieDetailsTitle>Overview</MovieDetailsTitle>
              <MovieDetailsText>{movie.overview}</MovieDetailsText>
              <MovieDetailsTitle>Genres</MovieDetailsTitle>
              {movie.genres &&
                movie.genres.map(genre => (
                  <MovieDetailsGenre key={genre.id}>
                    {genre.name}
                  </MovieDetailsGenre>
                ))}
            </div>
          </MovieDetailsCard>
          <hr />

          <MovieDetailsTitle> Additional information</MovieDetailsTitle>
          <StyledLink
            to={`cast`}
            state={location.state ? { from: location.state.from } : null}
          >
            Cast
          </StyledLink>
          <StyledLink
            to={`reviews`}
            state={location.state ? { from: location.state.from } : null}
          >
            Reviews
          </StyledLink>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

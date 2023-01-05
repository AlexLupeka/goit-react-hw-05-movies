import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from '../../Api/Api';
import { CastList, CastInput, CastImg, CastText } from './Cast.styled.jsx';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <CastList>
          {cast.map(
            element =>
              element.profile_path && (
                <CastInput key={element.id}>
                  <CastImg
                    src={`https://image.tmdb.org/t/p/w200${element.profile_path}`}
                    alt={element.name}
                  />
                  <h3>{element.name}</h3>
                  <p>{element.character}</p>
                </CastInput>
              )
          )}
        </CastList>
      ) : (
        <CastText>There is no information about the cast.</CastText>
      )}
    </>
  );
}

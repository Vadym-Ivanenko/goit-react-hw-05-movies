import { useState, useEffect } from 'react';
import { getMovieCast } from '../services/api';

export const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const getImageUrl = path => {
    return `https://image.tmdb.org/t/p/w200${path}`;
  };

  return (
    <div>
      <h3>Cast: </h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={getImageUrl(actor.profile_path)} alt={actor.name} />
            <div>
              <span>{actor.name}</span>
              <span>{actor.character}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

import { useState, useEffect } from 'react';
import { getMovieCast } from '../services/api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId, 'credits')
      .then(credits => setCast(credits.cast))
      .catch(console.log);
  }, [movieId]);

  return (
    <div>
      <h3>Cast: </h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <div>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

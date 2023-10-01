import { Suspense, useState, useRef, useEffect } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { BackLink } from 'components/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!movieDetails) return <h2>Loading...</h2>;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <div>
      <BackLink to={backLink.current}> Go back</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300px"
          height="440px"
        />
      </div>
      <div>
        <h2>{`${title}(${release_date.slice(0, 4)})`}</h2>
        <p>User Score: {Math.round(vote_average) * 10}%</p>
        <p>Overview:</p>
        <p>{overview}</p>
        <p>Genres:</p>
        {genres.length === 0 ? (
          <p>No genres</p>
        ) : (
          <p>{genres.map(({ name }) => name).join(', ')}</p>
        )}
        <h2>Additional Information</h2>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`} state={{ from: backLink }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              state={{ from: backLink }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<span>Loading subpage...</span>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

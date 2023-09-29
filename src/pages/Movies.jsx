import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';
import { SearchBar } from 'components/SearchBar';
import { MoviesList } from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [finded, setFinded] = useState(false);
  const [results, setResults] = useState(false);

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    setResults(false);
    if (movieName) {
      setFinded(true);
      getSearchMovies(movieName)
        .then(movies => {
          setMovies(movies);
          if (movies.length === 0) {
            setResults(true);
          }
        })
        .catch(console.log);
    }
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.name.value;
    const nextParams = query !== '' ? { query } : {};

    if (query === '') {
      toast.error('Please enter your request');
    }
    setSearchParams(nextParams);
    evt.target.name.value = '';
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {finded && results && <p>No results found for your search query</p>}
      {finded && !results && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

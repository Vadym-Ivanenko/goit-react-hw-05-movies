import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data);
      })
      .catch(console.log);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;

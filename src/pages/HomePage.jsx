import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=04d825320fcaf84d8ca611532a80267b');
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
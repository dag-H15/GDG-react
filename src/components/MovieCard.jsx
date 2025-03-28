import React from 'react';
import { useWatchlist } from '../context/WatchListContext';

function MovieCard({ movie }) {
  const { addToWatchlist } = useWatchlist();

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-img"
      />
      <h3 className="movie-title">{movie.title}</h3>
      <button
        onClick={() => addToWatchlist(movie)}
        className="btn-add"
      >
        Add to Watchlist
      </button>
    </div>
  );
}

export default MovieCard;
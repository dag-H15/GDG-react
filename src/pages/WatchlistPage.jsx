import React from 'react';
import { useWatchlist } from '../context/WatchListContext';
import MovieList from '../components/MovieList';

function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <div className="container">
      <h1 className="page-title">My Watchlist</h1>
      {watchlist.length > 0 ? (
        <MovieList movies={watchlist} />
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
}

export default WatchlistPage;
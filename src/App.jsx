import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchListContext.jsx';
import HomePage from './pages/HomePage.jsx';
import WatchlistPage from './pages/Watchlistpage.jsx';

function App() {
  return (
    <WatchlistProvider>
      <Router>
        <nav className="navbar">
          <Link to="/" className="navbar-brand">Movie App</Link>
          <Link to="/watchlist" className="navbar-link">Watchlist</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </Router>
    </WatchlistProvider>
  );
}

export default App;
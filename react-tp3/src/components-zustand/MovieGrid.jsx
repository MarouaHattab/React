import { useEffect } from 'react';
import useMoviesStore from '../zustand/useMoviesStore';
import MovieCard from './MovieCard';

function MovieGrid() {
  const { getFilteredMovies, loading, error, loadMovies } = useMoviesStore();
  const movies = getFilteredMovies();

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">❌ {error}</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-message">No movies found</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;

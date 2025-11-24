import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies, selectFilteredMovies, selectLoading, selectError } from '../redux/moviesSlice';
import MovieCard from './MovieCard';

function MovieGrid() {
  const dispatch = useDispatch();
  const movies = useSelector(selectFilteredMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

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

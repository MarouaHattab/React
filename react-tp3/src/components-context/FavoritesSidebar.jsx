import { useMovies } from '../context/MoviesContext';
import { getPosterUrl } from '../utils/tmdbApi';

function FavoritesSidebar() {
  const { getFavoriteMovies, toggleFavorite } = useMovies();
  const favoriteMovies = getFavoriteMovies();

  return (
    <aside className="favorites-sidebar">
      <div className="favorites-header">
        <h2 className="favorites-title">
          ⭐ Favorites
          <span className="favorites-count">{favoriteMovies.length}</span>
        </h2>
      </div>
      
      <div className="favorites-list">
        {favoriteMovies.length === 0 ? (
          <div className="favorites-empty">
            <p>No favorites yet!</p>
            <p className="favorites-hint">Click the ☆ on any movie to add it here</p>
          </div>
        ) : (
          favoriteMovies.map(movie => (
            <div key={movie.id} className="favorite-item">
              <img
                src={getPosterUrl(movie.poster_path, 'w185')}
                alt={movie.title}
                className="favorite-poster"
              />
              <div className="favorite-info">
                <h4 className="favorite-title">{movie.title}</h4>
                <p className="favorite-rating">⭐ {movie.vote_average?.toFixed(1)}</p>
              </div>
              <button
                onClick={() => toggleFavorite(movie.id)}
                className="remove-favorite-btn"
                aria-label="Remove from favorites"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}

export default FavoritesSidebar;

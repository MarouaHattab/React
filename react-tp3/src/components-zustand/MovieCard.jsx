import useMoviesStore from '../zustand/useMoviesStore';
import { getPosterUrl, getGenreName } from '../utils/tmdbApi';

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useMoviesStore();
  const favorite = isFavorite(movie.id);

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="movie-poster"
          loading="lazy"
        />
        <button
          onClick={() => toggleFavorite(movie.id)}
          className={`favorite-btn ${favorite ? 'active' : ''}`}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '⭐' : '☆'}
        </button>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">
            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
          </span>
          <span className="movie-rating">⭐ {movie.vote_average?.toFixed(1)}</span>
        </div>
        {movie.genre_ids && movie.genre_ids.length > 0 && (
          <div className="movie-genres">
            {movie.genre_ids.slice(0, 2).map(genreId => (
              <span key={genreId} className="genre-tag">
                {getGenreName(genreId)}
              </span>
            ))}
          </div>
        )}
        <p className="movie-overview">
          {movie.overview ? 
            (movie.overview.length > 120 ? movie.overview.substring(0, 120) + '...' : movie.overview)
            : 'No description available'}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;

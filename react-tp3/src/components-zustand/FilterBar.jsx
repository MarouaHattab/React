import { useEffect, useRef } from 'react';
import useMoviesStore from '../zustand/useMoviesStore';
import { GENRES } from '../utils/tmdbApi';

function FilterBar() {
  const { selectedGenre, searchQuery, setSelectedGenre, setSearchQuery, searchMovies, loadMovies } = useMoviesStore();
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout for search
    searchTimeoutRef.current = setTimeout(() => {
      if (searchQuery) {
        searchMovies(searchQuery);
      } else {
        loadMovies();
      }
    }, 500);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, searchMovies, loadMovies]);

  return (
    <div className="filter-bar">
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="genre-filter">
        <label className="filter-label">Filter by Genre:</label>
        <select
          value={selectedGenre || ''}
          onChange={(e) => setSelectedGenre(e.target.value ? Number(e.target.value) : null)}
          className="genre-select"
        >
          <option value="">All Genres</option>
          {GENRES.map(genre => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;

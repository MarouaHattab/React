import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGenre, setSearchQuery, searchMoviesThunk, loadMovies, selectSelectedGenre, selectSearchQuery } from '../redux/moviesSlice';
import { GENRES } from '../utils/tmdbApi';
import { useEffect, useRef } from 'react';

function FilterBar() {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(selectSelectedGenre);
  const searchQuery = useSelector(selectSearchQuery);
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout for search
    searchTimeoutRef.current = setTimeout(() => {
      if (searchQuery) {
        dispatch(searchMoviesThunk(searchQuery));
      } else {
        dispatch(loadMovies());
      }
    }, 500);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, dispatch]);

  return (
    <div className="filter-bar">
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="search-input"
        />
      </div>
      
      <div className="genre-filter">
        <label className="filter-label">Filter by Genre:</label>
        <select
          value={selectedGenre || ''}
          onChange={(e) => dispatch(setSelectedGenre(e.target.value ? Number(e.target.value) : null))}
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

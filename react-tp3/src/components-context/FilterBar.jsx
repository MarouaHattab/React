import { useMovies } from '../context/MoviesContext';
import { GENRES } from '../utils/tmdbApi';

function FilterBar() {
  const { selectedGenre, setSelectedGenre, searchQuery, setSearchQuery } = useMovies();

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

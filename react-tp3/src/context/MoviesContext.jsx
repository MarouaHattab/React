import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPopularMovies, searchMovies } from '../utils/tmdbApi';

const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within MoviesProvider');
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load movies on mount
  useEffect(() => {
    loadMovies();
  }, []);

  // Handle search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        handleSearch(searchQuery);
      } else {
        loadMovies();
      }
    }, 500); // Debounce search

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const loadMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPopularMovies();
      setMovies(data);
    } catch (err) {
      setError('Failed to load movies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchMovies(query);
      setMovies(data);
    } catch (err) {
      setError('Failed to search movies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (movieId) => {
    setFavorites(prev => {
      if (prev.includes(movieId)) {
        return prev.filter(id => id !== movieId);
      }
      return [...prev, movieId];
    });
  };

  const isFavorite = (movieId) => {
    return favorites.includes(movieId);
  };

  const getFilteredMovies = () => {
    if (!selectedGenre) return movies;
    return movies.filter(movie => movie.genre_ids?.includes(selectedGenre));
  };

  const getFavoriteMovies = () => {
    return movies.filter(movie => favorites.includes(movie.id));
  };

  const value = {
    movies,
    favorites,
    selectedGenre,
    searchQuery,
    loading,
    error,
    setSelectedGenre,
    setSearchQuery,
    toggleFavorite,
    isFavorite,
    getFilteredMovies,
    getFavoriteMovies,
  };

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};

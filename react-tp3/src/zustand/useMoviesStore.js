import { create } from 'zustand';
import { fetchPopularMovies, searchMovies } from '../utils/tmdbApi';

const useMoviesStore = create((set, get) => ({
  // State
  movies: [],
  favorites: [],
  selectedGenre: null,
  searchQuery: '',
  loading: false,
  error: null,

  // Actions
  loadMovies: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchPopularMovies();
      set({ movies: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to load movies', loading: false });
      console.error(error);
    }
  },

  searchMovies: async (query) => {
    set({ loading: true, error: null });
    try {
      const data = await searchMovies(query);
      set({ movies: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to search movies', loading: false });
      console.error(error);
    }
  },

  toggleFavorite: (movieId) => {
    set((state) => ({
      favorites: state.favorites.includes(movieId)
        ? state.favorites.filter(id => id !== movieId)
        : [...state.favorites, movieId]
    }));
  },

  setSelectedGenre: (genreId) => {
    set({ selectedGenre: genreId });
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  // Computed getters
  getFilteredMovies: () => {
    const { movies, selectedGenre } = get();
    if (!selectedGenre) return movies;
    return movies.filter(movie => movie.genre_ids?.includes(selectedGenre));
  },

  getFavoriteMovies: () => {
    const { movies, favorites } = get();
    return movies.filter(movie => favorites.includes(movie.id));
  },

  isFavorite: (movieId) => {
    const { favorites } = get();
    return favorites.includes(movieId);
  },
}));

export default useMoviesStore;

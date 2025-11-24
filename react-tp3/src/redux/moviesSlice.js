import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies, searchMovies } from '../utils/tmdbApi';

// Async thunks
export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchPopularMovies();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchMoviesThunk = createAsyncThunk(
  'movies/searchMovies',
  async (query, { rejectWithValue }) => {
    try {
      const data = await searchMovies(query);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: [],
    selectedGenre: null,
    searchQuery: '',
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      if (state.favorites.includes(movieId)) {
        state.favorites = state.favorites.filter(id => id !== movieId);
      } else {
        state.favorites.push(movieId);
      }
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Load movies
      .addCase(loadMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(loadMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load movies';
      })
      // Search movies
      .addCase(searchMoviesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMoviesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(searchMoviesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to search movies';
      });
  },
});

// Selectors
export const selectMovies = (state) => state.movies.movies;
export const selectFavorites = (state) => state.movies.favorites;
export const selectSelectedGenre = (state) => state.movies.selectedGenre;
export const selectSearchQuery = (state) => state.movies.searchQuery;
export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;

export const selectFilteredMovies = (state) => {
  const { movies, selectedGenre } = state.movies;
  if (!selectedGenre) return movies;
  return movies.filter(movie => movie.genre_ids?.includes(selectedGenre));
};

export const selectFavoriteMovies = (state) => {
  const { movies, favorites } = state.movies;
  return movies.filter(movie => favorites.includes(movie.id));
};

export const selectIsFavorite = (movieId) => (state) => {
  return state.movies.favorites.includes(movieId);
};

export const { toggleFavorite, setSelectedGenre, setSearchQuery } = moviesSlice.actions;
export default moviesSlice.reducer;

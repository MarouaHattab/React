const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

/**
 * Fetch popular movies from TMDb API
 * @param {number} page - Page number for pagination
 * @returns {Promise<Array>} Array of movie objects
 */
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

/**
 * Search movies by title
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of movie objects
 */
export const searchMovies = async (query) => {
  if (!query.trim()) {
    return fetchPopularMovies();
  }
  
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`
    );
    
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

/**
 * Get poster image URL
 * @param {string} posterPath - Poster path from API
 * @param {string} size - Image size (w185, w342, w500, w780, original)
 * @returns {string} Full image URL
 */
export const getPosterUrl = (posterPath, size = 'w342') => {
  if (!posterPath) {
    return 'https://via.placeholder.com/342x513?text=No+Image';
  }
  return `${IMAGE_BASE_URL}/${size}${posterPath}`;
};

/**
 * Get backdrop image URL
 * @param {string} backdropPath - Backdrop path from API
 * @param {string} size - Image size (w300, w780, w1280, original)
 * @returns {string} Full image URL
 */
export const getBackdropUrl = (backdropPath, size = 'w780') => {
  if (!backdropPath) {
    return 'https://via.placeholder.com/780x439?text=No+Image';
  }
  return `${IMAGE_BASE_URL}/${size}${backdropPath}`;
};

/**
 * Get genre name by ID
 * @param {number} genreId - Genre ID
 * @returns {string} Genre name
 */
export const getGenreName = (genreId) => {
  const genre = GENRES.find(g => g.id === genreId);
  return genre ? genre.name : 'Unknown';
};

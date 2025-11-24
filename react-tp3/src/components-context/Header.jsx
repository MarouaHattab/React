import { useMovies } from '../context/MoviesContext';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="header-icon">🎬</span>
          Film Project
          <span className="header-badge">Context API</span>
        </h1>
        <p className="header-subtitle">Discover and save your favorite movies</p>
      </div>
    </header>
  );
}

export default Header;

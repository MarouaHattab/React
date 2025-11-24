function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="header-icon">🎬</span>
          Movie Explorer
          <span className="header-badge">Redux Toolkit</span>
        </h1>
        <p className="header-subtitle">Discover and save your favorite movies</p>
      </div>
    </header>
  );
}

export default Header;

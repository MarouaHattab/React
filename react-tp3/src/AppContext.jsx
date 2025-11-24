import Header from "./components-context/Header";
import FilterBar from "./components-context/FilterBar";
import MovieGrid from "./components-context/MovieGrid";
import FavoritesSidebar from "./components-context/FavoritesSidebar";

function AppContext() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <div className="content-area">
          <FilterBar />
          <MovieGrid />
        </div>
        <FavoritesSidebar />
      </div>
    </div>
  );
}

export default AppContext;

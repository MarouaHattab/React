import Header from "./components-redux/Header";
import FilterBar from "./components-redux/FilterBar";
import MovieGrid from "./components-redux/MovieGrid";
import FavoritesSidebar from "./components-redux/FavoritesSidebar";

function AppRedux() {
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

export default AppRedux;

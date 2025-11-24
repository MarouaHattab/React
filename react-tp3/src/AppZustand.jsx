import Header from "./components-zustand/Header";
import FilterBar from "./components-zustand/FilterBar";
import MovieGrid from "./components-zustand/MovieGrid";
import FavoritesSidebar from "./components-zustand/FavoritesSidebar";

function AppZustand() {
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

export default AppZustand;

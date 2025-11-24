import Header from "./components-context/Header";
import FilterBar from "./components-context/FilterBar";
import CharacterGrid from "./components-context/CharacterGrid";
import FavoritesSidebar from "./components-context/FavoritesSidebar";

function AppContext() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div>
          <FilterBar />
          <CharacterGrid />
        </div>
        <FavoritesSidebar />
      </div>
    </div>
  );
}

export default AppContext;

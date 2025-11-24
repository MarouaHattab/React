import Header from "./components-redux/Header";
import FilterBar from "./components-redux/FilterBar";
import CharacterGrid from "./components-redux/CharacterGrid";
import FavoritesSidebar from "./components-redux/FavoritesSidebar";

function AppRedux() {
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

export default AppRedux;

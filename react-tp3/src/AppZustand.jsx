import Header from "./components-zustand/Header";
import FilterBar from "./components-zustand/FilterBar";
import CharacterGrid from "./components-zustand/CharacterGrid";
import FavoritesSidebar from "./components-zustand/FavoritesSidebar";

function AppZustand() {
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

export default AppZustand;

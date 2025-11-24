import { useCharacters } from "../context/CharactersContext";
import CharacterCard from "./CharacterCard";

function CharacterGrid() {
  const { getFilteredCharacters, loading } = useCharacters();
  const filteredCharacters = getFilteredCharacters();

  if (loading) {
    return <div className="loading">Loading characters...</div>;
  }

  return (
    <div className="character-grid">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
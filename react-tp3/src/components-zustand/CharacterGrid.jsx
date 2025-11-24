import { useEffect } from 'react';
import useCharactersStore from '../zustand/useCharactersStore';
import CharacterCard from './CharacterCard';

function CharacterGrid() {
  // Subscribe to characters and filter so component re-renders when they change
  const characters = useCharactersStore(state => state.characters);
  const filter = useCharactersStore(state => state.filter);
  const loading = useCharactersStore(state => state.loading);
  const fetchCharacters = useCharactersStore(state => state.fetchCharacters);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  // Calculate filtered characters from the subscribed state
  const filteredCharacters = filter === 'all' 
    ? characters 
    : characters.filter(char => char.status.toLowerCase() === filter);

  return (
    <div className="character-grid">
      {filteredCharacters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;

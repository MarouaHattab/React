import { createContext, useContext, useEffect, useState } from "react";

const CharactersContext = createContext();

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) throw new Error("useCharacters must be used within a CharactersProvider");
  return context;
};

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Load characters
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id)
        ? prev.filter((likeId) => likeId !== id)
        : [...prev, id]
    );
  };

  // Filter characters by status
  const getFilteredCharacters = () => {
    if (filter === "all") return characters;
    return characters.filter((char) => char.status.toLowerCase() === filter);
  };

  // Get liked characters
  const getLikedCharacters = () => {
    return characters.filter((char) => likedIds.includes(char.id));
  };

  const value = {
    characters,
    likedIds,
    filter,
    loading,
    toggleLike,
    setFilter,
    getLikedCharacters,
    getFilteredCharacters,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};

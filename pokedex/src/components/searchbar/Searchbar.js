import React, { useState } from "react";
import { searchPokemon } from "../../actions/PokeApiAction";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={handleChangeSearch} />
      </div>

      <div className="searchbar-btn">
        <button onClick={onClickSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;

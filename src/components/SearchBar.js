import axios from "axios";
import React, { useState } from "react";

const SearchBar = ({
  updatePokemonName,
  updateDescription,
  updateShowDescription,
  updateShowPokeball,
}) => {
  const [pokemonName, setPokemonName] = useState("");
  const handleClick = async (e) => {
    updateShowDescription(false);
    updateShowPokeball(true);
    const response = await axios.get(
      `${process.env.REACT_APP_POKEMON_API}/${pokemonName}`
    );

    console.log("response:", response);

    updatePokemonName(response.data.name);
    updateDescription(response.data.description);
  };
  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        onChange={handleChange}
        value={pokemonName}
      ></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";

const SearchBar = (props) => {
  const [pokemonName, setPokemonName] = useState("");
  const handleClick = async (e) => {
    e.persist();
    console.log("api called with", pokemonName);
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

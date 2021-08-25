import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({
  updatePokemonName,
  updateDescription,
  updateShowDescription,
  updateShowPokeball,
}) => {
  const [pokemonName, setPokemonName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  useEffect(() => {
    setIsButtonDisabled(pokemonName.length < 3);
  }, [pokemonName]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        onChange={handleChange}
        value={pokemonName}
      ></input>
      <button onClick={handleClick} disabled={isButtonDisabled}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

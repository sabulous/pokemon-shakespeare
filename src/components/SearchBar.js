import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchIcon from "./SearchIcon";

const SearchBar = ({
  updatePokemonInfo,
  updateShowInfo,
  updateIsLoading,
  updateErrorMessage,
  isLoading,
}) => {
  const [pokemonName, setPokemonName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      updateShowInfo(false);
      updateErrorMessage(null);
      updateIsLoading(true);

      const response = await axios.get(
        `${process.env.REACT_APP_POKEMON_API}/${pokemonName}`
      );

      console.log("response:", response);

      updatePokemonInfo({
        name: response.data.name,
        description: response.data.description,
      });
    } catch (e) {
      updateErrorMessage(e.message);
    }
  }, [
    pokemonName,
    updateShowInfo,
    updateErrorMessage,
    updateIsLoading,
    updatePokemonInfo,
  ]);

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isLoading && !isButtonDisabled && e.key === "Enter") {
        handleClick();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClick, isLoading, isButtonDisabled]);

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
        disabled={isLoading}
      ></input>
      <button
        className="search-button"
        onClick={handleClick}
        disabled={isLoading || isButtonDisabled}
      >
        <SearchIcon
          color={isLoading || isButtonDisabled ? "#808080" : "#0071b9"}
        />
      </button>
    </div>
  );
};

export default SearchBar;

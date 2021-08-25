import React, { useState, useEffect } from "react";
import logo from "./pokemon_logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonDescription from "./components/PokemonDescription";
import Footer from "./components/Footer";
import PokeballAnimation from "./components/PokeballAnimation";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [description, setDescription] = useState("");
  const [showPokeball, setShowPokeball] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    let timer;
    if (showPokeball) {
      console.log("hey");
      timer = setTimeout(() => {
        console.log("in timeout");
        setShowPokeball(false);
        setShowDescription(true);
      }, 2400);
    }
    return () => clearTimeout(timer);
  }, [showPokeball]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchBar
        updatePokemonName={setPokemonName}
        updateDescription={setDescription}
        updateShowDescription={setShowDescription}
        updateShowPokeball={setShowPokeball}
      />
      {showPokeball && <PokeballAnimation />}
      {showDescription && (
        <PokemonDescription name={pokemonName} description={description} />
      )}
      <Footer />
    </div>
  );
}

export default App;

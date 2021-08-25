import React, { useState, useEffect, useRef } from "react";
import logo from "./pokemon_logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonDescription from "./components/PokemonDescription";
import Footer from "./components/Footer";
import PokeballAnimation from "./components/PokeballAnimation";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState({
    name: null,
    description: null,
  });
  const [showInfo, setShowInfo] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (isLoading) {
      timerRef.current = setTimeout(() => {
        setIsLoading(false);
        if (!errorMessage) {
          setShowInfo(true);
        } else {
          setShowErrorMessage(true);
        }
      }, 2400);
    }

    if (!errorMessage) {
      setShowErrorMessage(false);
    }

    return () => clearTimeout(timerRef.current);
  }, [isLoading, errorMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <SearchBar
        updatePokemonInfo={setPokemonInfo}
        updateShowInfo={setShowInfo}
        updateIsLoading={setIsLoading}
        updateErrorMessage={setErrorMessage}
        isLoading={isLoading}
      />

      {isLoading && <PokeballAnimation />}

      {!errorMessage && showInfo && (
        <PokemonDescription
          name={pokemonInfo.name}
          description={pokemonInfo.description}
        />
      )}

      {!showInfo && showErrorMessage && <ErrorMessage message={errorMessage} />}

      <Footer />
    </div>
  );
}

export default App;

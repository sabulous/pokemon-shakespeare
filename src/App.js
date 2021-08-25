import logo from "./pokemon_logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
        <p>
          <span>Powered by </span>
          <a
            className="App-link"
            href="https://pokeapi.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokéApi
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://funtranslations.com/api/shakespeare"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fun Translations
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

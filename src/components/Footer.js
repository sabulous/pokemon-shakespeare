const Footer = (props) => {
  return (
    <p className="footer">
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
  );
};

export default Footer;

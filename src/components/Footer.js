import React from "react";

const Footer = () => {
  return (
    <p className="footer">
      <span>Powered by </span>
      <a
        href="https://pokeapi.co/docs/v2"
        target="_blank"
        rel="noopener noreferrer"
      >
        PokéApi
      </a>
      <span> and </span>
      <a
        href="https://funtranslations.com/api/shakespeare"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fun Translations
      </a>
      <span> - </span>
      <a href="mailto:sabsah@gmail.com" rel="noopener noreferrer">
        Sabri Sahin © 2021
      </a>
    </p>
  );
};

export default Footer;

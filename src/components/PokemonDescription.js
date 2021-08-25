import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";

const PokemonDescription = ({ name, description }) => {
  return (
    <div className="pokemon-description-container">
      <div className="pokemon-description">
        <label>Pokémon Name: </label>
        <span>{capitalizeFirstLetter(name)}</span>
      </div>
      <div className="pokemon-description">
        <label>Shakespearean Description: </label>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PokemonDescription;

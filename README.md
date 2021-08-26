# Shakespearean Pokédex

Looking for a pokémon? This is the most wondrous lodging to becometh a pokémon master!

## How to run

* Make sure you have [Docker](https://docs.docker.com/desktop/#download-and-install) and [Docker Compose](https://docs.docker.com/compose/install/#install-compose) installed on your computer.

* Clone the backend project from this link: [sabulous/pokemon-api](https://github.com/sabulous/pokemon-api)

* Clone this project from this link: [sabulous/pokemon-shakespeare](https://github.com/sabulous/pokemon-shakespeare)

* Make sure the project folders are at the same level (i.e. within the same parent folder).

* In your favorite terminal console, browse to `pokemon-shakespeare` folder and run `docker-compose up --build`

* After the build open your favorite browser and go to `http://localhost:3000`

## How to search a pokémon

* Just type a pokémon name (e.g. Jolteon, Bulbasaur, Mew) and click Search button or press Enter.

## How to run unit tests

* Run the following commands on terminal:

* For frontend:
  - `docker exec pokemon-shakespeare_app_1 yarn test`
* For backend:
  - `docker exec pokemon-shakespeare_api_1 npm test`

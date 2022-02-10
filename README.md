# Pokemon API Client

This project is a fork of [Pokemon-Api-React by veeson41](https://github.com/veeson41/Pokemon-Api-React) that will be used to learn and practice software testing.

# Quick start

- Clone the repository.
- Install dependencies `npm install`.
- Run app `npm start`.

# Current state

The app presents you a list of Pokemon requested to the Pokemon open REST API.

The app shows you:

- An **Input text field** used to filter the list of Pokemon.
- Some *loading messages* while the data is requested, and as the data is loading, the list shows you the Pokemon images.
- A modal with single Pokemon data when you click on a Pokemon in the list.

# To do list

- Add a unique loader state and present all data when ready.
- Implement the new [Pokemon Client](https://github.com/PokeAPI/pokeapi-js-wrapper).

# Challenges

- Use TDD to implement the new behaviors.
- Code refactor to maintain layer independence.
- Use dependency injection to implement the new client.
- Grow up the coverage to the higher!

# Tips

- Use [jest-when](https://www.npmjs.com/package/jest-when)
- Use [jest-mock-extended](https://www.npmjs.com/package/jest-mock-extended)

# What next?

- Add Pokemon description in single modal.
- Add a filter by element type.
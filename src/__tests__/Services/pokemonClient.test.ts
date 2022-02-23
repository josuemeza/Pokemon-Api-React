import Pokemon from '../../Model/Pokemon';
import {
  PokemonClient,
  PokemonRestApiClient,
} from '../../Services/pokemonClient';

// tip 1: primero, se recomienda hacer un it con el objetivo general o ACs.

// TODO: implementar fetchAll al cliente
it('should load data of all pokemons', async () => {
  let result = [];
  const expected: Pokemon[] = [];

  const client: PokemonClient = new PokemonRestApiClient();

  result = await client.fetchAll();

  expect(result).toEqual(expected);
});

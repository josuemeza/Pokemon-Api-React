import Pokemon from "../Model/Pokemon";
// @ts-ignore
import { Pokedex } from "pokeapi-js-wrapper";

export interface PokemonClient {
  fetchAll: () => Promise<Pokemon[]>;
}

export class PokemonRestApiClient implements PokemonClient {
  async fetchAll() {
    const P = new Pokedex();
    const response = await P.getPokemonsList();
    const listName = response.results.map((pokemon: any) => pokemon.name);
    return await P.getPokemonByName(listName);
  }
}

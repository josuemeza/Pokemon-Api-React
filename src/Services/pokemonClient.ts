import Pokemon from '../Model/Pokemon';

export interface PokemonClient {
  fetchAll: () => Promise<Pokemon[]>;
}

export class PokemonRestApiClient implements PokemonClient {
  async fetchAll() {
    return [];
  }
}

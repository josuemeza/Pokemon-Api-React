import { PokemonClient } from ".";

export class PokemonCli implements PokemonClient {
  async fetchAll() {
    return [{
      name: "",
      sprite: "",
      pic: ""
    }]
  }
}
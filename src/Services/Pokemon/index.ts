import Pokemon from "../../Model/Pokemon";

export interface PokemonClient {
  fetchAll: () => Promise<Pokemon[]>
}

export { PokemonRestApi, ENDPOINT_URL } from "./PokemonRestApi"
export { PokemonCli } from "./PokemonCLI"
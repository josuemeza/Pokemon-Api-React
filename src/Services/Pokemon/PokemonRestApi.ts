import { PokemonClient } from "."
import axios from "axios"

export const ENDPOINT_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000"

export class PokemonRestApi implements PokemonClient {
  async fetchAll() {
    const result = await axios.get(ENDPOINT_URL)
    const data = await Promise.all(
      result.data.results.map(async (pokemon: any) => {
        const result = await axios.get(pokemon.url)
        const { name, sprites } = result.data
        const data = {
          name,
          sprite: sprites["front_default"],
          pic: sprites["other"]["official-artwork"]["front_default"]
        }
        return data
      })
    )
    return data
  }
}
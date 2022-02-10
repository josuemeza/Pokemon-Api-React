import { PokemonClient } from "."
// @ts-ignore
import { Pokedex } from "pokeapi-js-wrapper"

export class PokemonCli implements PokemonClient {
  async fetchAll() {
    const pokedex = new Pokedex()
    const { results } = await pokedex.getPokemonsList()
    const names = results.map((item: any) => item.name)
    const all = await pokedex.getPokemonByName(names)
    const result = Array.isArray(all) ? all : [ all ]
    return result.map(({ name, sprites }) => ({
      name,
      sprite: sprites["front_default"],
      pic: sprites["other"]["official-artwork"]["front_default"]
    }))
  }
}
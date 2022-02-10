import Pokemon from "../../Model/Pokemon"
import { PokemonCli } from "../../Services/Pokemon/PokemonCLI"
// @ts-ignore
import { Pokedex, mockGetPokemonsList, mockGetPokemonByName } from "pokeapi-js-wrapper"
import { when } from "jest-when"
import { fakePokemonListItem, fakePokemonSingle } from "../../__fixtures__/pokemon-js-wrapper.fixtures"

jest.mock("pokeapi-js-wrapper")

beforeEach(() => {
  Pokedex.mockClear()
})

describe("Call to fetchAll", () => {
  it("should return a list of pokemon", async () => {
    const listAmount = 5
    const pokemonListData = Array(listAmount).fill(fakePokemonListItem())
    const names = pokemonListData.map(item => item.name)
    const pokemonFullList = names.map(name => fakePokemonSingle({ name }))

    when(mockGetPokemonsList)
      .calledWith()
      .mockReturnValue({ results: pokemonListData })
    when(mockGetPokemonByName)
      .calledWith(names)
      .mockReturnValue(pokemonFullList)

    const expected: Pokemon[] = pokemonFullList.map(({ name, sprites }) => ({
      name,
      sprite: sprites["front_default"],
      pic: sprites["other"]["official-artwork"]["front_default"]
    }))
    const client = new PokemonCli()
    const result: Pokemon[] = await client.fetchAll()
    expect(result).toEqual(expected)
  })
  
  it("should return a list with a single pokemon when it is requested", async () => {
    const pokemonListItem = fakePokemonListItem()
    const names = [ pokemonListItem.name ]
    const pokemonFullData = fakePokemonSingle({ name: pokemonListItem.name })
    const { name, sprites } = pokemonFullData
    const expected: Pokemon[] = [{
      name,
      sprite: sprites["front_default"],
      pic: sprites["other"]["official-artwork"]["front_default"]
    }]

    when(mockGetPokemonsList)
      .calledWith()
      .mockReturnValue({ results: [ pokemonListItem ] })
    when(mockGetPokemonByName)
      .calledWith(names)
      .mockReturnValue(pokemonFullData)

    const client = new PokemonCli()
    const result: Pokemon[] = await client.fetchAll()
    expect(result).toEqual(expected)
  })
})
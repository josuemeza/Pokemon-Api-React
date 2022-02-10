import { when } from "jest-when"
import axios from "axios"
import Pokemon from "../../Model/Pokemon"
import { PokemonRestApi, ENDPOINT_URL } from "../../Services/Pokemon"
import { fakePokemonListItem, fakePokemonSingle } from "../../__fixtures__/pokemon-js-wrapper.fixtures"

jest.mock("axios")

beforeEach(() => {
  jest.resetAllMocks()
})

describe("Call to fetchAll", () => {
  it("should return a list of pokemon", async () => {
    const listAmount = 5
    const url = "https://sample.pokemon"
    const pokemonListData = Array(listAmount).fill(fakePokemonListItem({ url }))
    const pokemonSingle = fakePokemonSingle()
    const { name, sprites } = pokemonSingle

    const expected: Pokemon[] = Array(listAmount).fill({
      name,
      sprite: sprites["front_default"],
      pic: sprites["other"]["official-artwork"]["front_default"]
    })

    when(axios.get)
      .calledWith(ENDPOINT_URL)
      .mockReturnValue(new Promise(res => res({
        "data": {
          "results": pokemonListData
        }
      })))
    
    when(axios.get)
      .calledWith(url)
      .mockReturnValue(new Promise(res => res({
        "data": pokemonSingle
      })))

    const client = new PokemonRestApi()
    const result: Pokemon[] = await client.fetchAll()
    expect(result).toEqual(expected)
  })
})
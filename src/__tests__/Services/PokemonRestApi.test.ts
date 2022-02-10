import { when } from "jest-when"
import axios from "axios"
import Pokemon from "../../Model/Pokemon"
import { PokemonRestApi, ENDPOINT_URL } from "../../Services/Pokemon"
import { services } from "../../__mocks__/Services/PokemonRestApi.mock"

jest.mock("axios")

beforeEach(() => {
  jest.resetAllMocks()
})

describe("Call to fetchAll", () => {
  it("should return a list of pokemon", async () => {
    const mockList = services.responses.list()
    const mockSingle = services.responses.single()
    const expected: Pokemon[] = [{
      name: mockSingle.data.name,
      sprite: mockSingle.data.sprites["front_default"],
      pic: mockSingle.data.sprites["other"]["official-artwork"]["front_default"]
    }]

    when(axios.get)
      .calledWith(ENDPOINT_URL)
      .mockReturnValue(new Promise(res => res(mockList)))
    
    when(axios.get)
      .calledWith("https://sample.pokemon")
      .mockReturnValue(new Promise(res => res(mockSingle)))

    const restClient = new PokemonRestApi()
    const result: Pokemon[] = await restClient.fetchAll()
    expect(result).toEqual(expected)
  })
})
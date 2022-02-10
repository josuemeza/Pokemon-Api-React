export const mockGetPokemonsList = jest.fn()
export const mockGetPokemonByName = jest.fn()

export const Pokedex = jest.fn().mockImplementation(() => {
  return {
    getPokemonsList: mockGetPokemonsList,
    getPokemonByName: mockGetPokemonByName
  }
})

export default { Pokedex }
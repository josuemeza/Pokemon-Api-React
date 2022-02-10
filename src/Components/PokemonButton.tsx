import React from "react"
import Pokemon from "../Model/Pokemon"

interface PokemonProps {
  pokemon: Pokemon
  setShowModal: (data: any) => void
}
export const PokemonButton: React.FC<PokemonProps> = ({
  pokemon,
  setShowModal
}) => (
  <img
    src={pokemon.sprite}
    alt={pokemon.name}
    onClick={() => {
      setShowModal({
        show: true,
        name: pokemon.name,
        pic: pokemon.pic,
      })
    }}
  />
)

export default PokemonButton
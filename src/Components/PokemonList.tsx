import React, { useEffect, useState } from "react"
import { PokemonClient } from "../Services/Pokemon"
import Pokemon from "../Model/Pokemon"
import PokemonButton from "./PokemonButton"

interface PokemonListProps {
  client: PokemonClient
  showModal: (data: any) => void
  searchWord: string
}
export const PokemonList: React.FC<PokemonListProps> = ({
  client,
  showModal,
  searchWord
}) => {
  const [ pokemonList, setPokemonList ] = useState<Pokemon[]>()
  const [ error, setError ] = useState()

  useEffect(() => {
    client
      .fetchAll()
      .then(setPokemonList)
      .catch(setError)
  }, [])

  if (error) return <h1>Something went wrong!</h1>
  if (!pokemonList) return <h1>Loading...</h1>

  return (
    <header className="App-header">
      <div>
        { pokemonList
            .filter(pokemon => pokemon.name.includes(searchWord))
            .map((pokemon, index) => (
              <PokemonButton
                key={index}
                pokemon={pokemon}
                setShowModal={showModal}
              />
            )
          )
        }
      </div>
    </header>
  );
}

export default PokemonList
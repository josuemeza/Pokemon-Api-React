import React, { useState } from "react"
import PokemonList from "./Components/PokemonList"
import SearchBar from "./Components/SearchBar"
import ModalComponent from "./Components/Modal/ModalComponent"
import { PokemonCli } from "./Services/Pokemon"

const defaultModal = {
  show: false,
  name: "",
  pic: "",
}

const App: React.FC = () => {
  const [searchName, setSearchName] = useState("")
  const [modal, setModal] = useState(defaultModal)

  return (
    <>
      <ModalComponent setModal={setModal} showModal={modal} />
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <div className="App">
        <PokemonList
          client={new PokemonCli()}
          showModal={setModal}
          searchWord={searchName}
        />
      </div>
    </>
  )
}

export default App;

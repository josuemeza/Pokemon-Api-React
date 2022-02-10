import React, { useState } from "react"
import { useOnScreen } from "./Components/useOnScreen"
import PokemonList from "./Components/PokemonList"
import SearchBar from "./Components/SearchBar"
import AutoScroll from "./Components/AutoScroll"
import ModalComponent from "./Components/Modal/ModalComponent"
import { PokemonRestApi } from "./Services/Pokemon"

const defaultModal = {
  show: false,
  name: "",
  pic: "",
}

const App: React.FC = () => {
  const [arrayCount, setRef] = useOnScreen({ rootMargin: "10px" })
  const [searchName, setSearchName] = useState("")
  const [modal, setModal] = useState(defaultModal)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <>
      <ModalComponent setModal={setModal} showModal={modal} />
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <div className="App">
        <PokemonList
          client={new PokemonRestApi()}
          showModal={setModal}
          searchWord={searchName}
        />
      </div>
      <AutoScroll isEnd={isEnd} setRef={setRef} />
    </>
  )
}

export default App;

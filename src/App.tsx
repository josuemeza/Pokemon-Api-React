import React, { useState, useEffect } from "react";
import { useOnScreen } from "./Components/useOnScreen";
import PokemonList from "./Components/PokemonList";
import "./Components/SearchBar";
import SearchBar from "./Components/SearchBar";
import "./Components/AutoScroll";
import AutoScroll from "./Components/AutoScroll";
import "./Components/Modal/ModalComponent";
import ModalComponent from "./Components/Modal/ModalComponent";
import { PokemonRestApi } from "./Services/Pokemon";

function App() {
  const [arrayCount, setRef] = useOnScreen({ rootMargin: "10px" });
  const [searchName, setSearchName] = useState("");
  const [modal, setModal] = useState({
    show: false,
    name: "",
    pic: "",
  });

  const [isEnd, setIsEnd] = useState(false);
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
  );
}

export default App;

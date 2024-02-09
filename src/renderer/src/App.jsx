import { useEffect, useState } from "react"
import FlashCard from "./components/FlashCard";
import FileOperations from "./components/FileOperations";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {

	const [ cards, setCards ] = useState([]);
	const [ decks, setDecks ] = useState(0);
  const [ deckInfo, setDeckInfo ] = useState([]);

  return (
    <div>
      <Outlet context={{ decks, setDecks, cards, setCards, deckInfo, setDeckInfo }}/>
    </div>
  )
}

export default App


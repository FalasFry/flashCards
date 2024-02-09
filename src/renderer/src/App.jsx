import { useEffect, useState } from "react"
import FlashCard from "./components/FlashCard";
import FileOperations from "./components/FileOperations";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {

	const [ cards, setCards ] = useState([]);
	const [ decks, setDecks ] = useState(0);

  return (
    <div>
      <Outlet context={{ decks, setDecks, cards, setCards }}/>
    </div>
  )
}

export default App


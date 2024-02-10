import { useState } from "react"
import { Outlet } from "react-router-dom";

function App() {

	const [ cards, setCards ] = useState([]);
	const [ decks, setDecks ] = useState(0);
  const [ deckInfo, setDeckInfo ] = useState([]);
  const [ cardData, setCardData ] = useState({});
  const [ deckObj, setDeckObj ] = useState({});

  return (
    <div>
      <Outlet context={{ decks, setDecks, cards, setCards, deckInfo, setDeckInfo, cardData, setCardData, deckObj, setDeckObj }}/>
    </div>
  )
}

export default App


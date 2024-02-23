import { useState } from "react"
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar'

function App() {

  // Flashcards of the selected deck.
	const [ cards, setCards ] = useState([]);
  // Total amount of saved decks.
	const [ decks, setDecks ] = useState(0);
  // Names of all the decks.
  const [ deckInfo, setDeckInfo ] = useState([]);
  // Data from the selected card
  const [ cardData, setCardData ] = useState({});
  // The object of the selected deck
  const [ deckObj, setDeckObj ] = useState({});
  // Name of selected deck
  const [ selectedDeck, setSelectedDeck ] = useState('');

  return (
    <div>
      <Outlet context={{ decks, setDecks, cards, setCards, deckInfo, setDeckInfo, cardData, setCardData, deckObj, setDeckObj, selectedDeck, setSelectedDeck  }}/>
    </div>
  )
}

export default App


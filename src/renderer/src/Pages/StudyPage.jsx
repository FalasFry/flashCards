import { useEffect, useState } from "react"
import FlashCard from "../components/FlashCard"
import FileOperations from "../components/FileOperations";
import { useNavigate, useOutletContext } from 'react-router-dom'

function StudyPage() {

	const navigate = useNavigate();
	const { cards, decks, setDecks, setCads } = useOutletContext();
	//const [ cards, setCards ] = useState([]);
	const [ cardIndex, setCardIndex ] = useState(0);
	const [ clicked, setClicked] = useState(false);
	//const [ decks, setDecks ] = useState([]);

	function nextCard(){
		!clicked ? cardIndex < cards.length-1 ? setCardIndex(curr => curr += 1) : setCardIndex(0) : '';
	}
	function prevCard(){
		!clicked ? cardIndex > 0 ? setCardIndex(curr => curr -= 1) : setCardIndex(cards.length-1) : '';
	}

	function loadDeck(){
		navigate("/load-deck");
	}

	function createDeck(){
		navigate("/create-deck");
	}

  	return (
	<div>

		<div className="navBarContainer">
			<div className="navBar">
			<button onClick={loadDeck}>Load Deck of Cards</button>
			<button onClick={createDeck}>Create New Deck</button>
			</div>
		</div>

		<div className="flashCardContainer">
			{cards.length > 0 && <FlashCard 
			question={cards[cardIndex][1].Question} 
			answer={cards[cardIndex][1].Answer} 
			hint={cards[cardIndex][1].Hint}
			clicked={clicked} 
			setClicked={setClicked} />}
		</div>

		{cards.length > 0 && <div className="panel">
			<button onClick={prevCard}>Prev</button>
			{cardIndex+1  +" / " +cards.length}
			<button onClick={nextCard}>Next</button>
		</div>}

	</div>
	)
}
export default StudyPage;


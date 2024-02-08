import { useEffect, useState } from "react"
import FlashCard from "./components/FlashCard";
import testFile from "./assets/test.json"

function App() {

  const [ cards, setCards ] = useState(Object.entries(testFile));
  const [ cardIndex, setCardIndex ] = useState(0);
  const [ clicked, setClicked] = useState(false);

  function nextCard(){
    !clicked ? cardIndex < cards.length-1 ? setCardIndex(curr => curr += 1) : setCardIndex(0) : '';
  }
  function prevCard(){
    !clicked ? cardIndex > 0 ? setCardIndex(curr => curr -= 1) : setCardIndex(cards.length-1) : '';
  }

  return (
    <div>

      <div className="navBarContainer">
        <div className="navBar">
          <button>Load Deck of Cards</button>
          <button>Create New Card</button>
        </div>
      </div>

      <div className="container">

        <FlashCard 
        question={cards[cardIndex][1].Question} 
        answer={cards[cardIndex][1].Answer} 
        hint={cards[cardIndex][1].Hint}
        clicked={clicked} 
        setClicked={setClicked} />

      </div>

      <div className="panel">
        <button onClick={prevCard}>Prev</button>
        {cardIndex+1  +" / " +cards.length}
        <button onClick={nextCard}>Next</button>
      </div>

    </div>
  )
}

export default App

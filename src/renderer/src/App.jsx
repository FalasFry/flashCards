import { useEffect, useState } from "react"
import FlashCard from "./components/FlashCard";
import FileOperations from "./components/FileOperations";

function App() {

  const [ cards, setCards ] = useState([]);
  const [ cardIndex, setCardIndex ] = useState(0);
  const [ clicked, setClicked] = useState(false);
  const [ decks, setDecks ] = useState([]);

  function nextCard(){
    !clicked ? cardIndex < cards.length-1 ? setCardIndex(curr => curr += 1) : setCardIndex(0) : '';
  }
  function prevCard(){
    !clicked ? cardIndex > 0 ? setCardIndex(curr => curr -= 1) : setCardIndex(cards.length-1) : '';
  }

  function loadDeck(){
    let fileOp = new FileOperations();
    let obj = fileOp.handleLoadData();
    console.log(obj);
    setCards(Object.entries(obj));
  }

  function createDeck(){

  }

  function viewDecks(e){
    e.preventDefault();
    let fileOp = new FileOperations();
    let arr = [];
    for(let i = 0; i < fileOp.countFiles(); i++){
      arr.push(i);
    }
    setDecks(arr);
  }

  return (
    <div>

      <div onSubmit={viewDecks} style={{backgroundColor: "lightblue", display:"flex"}}>
        <form>
          <label>Name</label>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>

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


      <div>
          {decks.map(() => {return(
            <div>
              <h2>HELLO</h2>
            </div>
          )})}
      </div>

    </div>
  )
}

export default App


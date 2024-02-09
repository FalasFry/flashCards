import { useEffect, useState } from "react"
import FlashCard from "../components/FlashCard"
import FileOperations from "../components/FileOperations";
import { useOutletContext } from 'react-router-dom'

function CreateDeckPage() {

  //const [ cards, setCards ] = useState([]);
  const [ cardIndex, setCardIndex ] = useState(0);
  const [ clicked, setClicked] = useState(false);
  //const [ decks, setDecks ] = useState([]);

  function viewDecks(e){
	e.preventDefault();
	let fileOp = new FileOperations();
	let arr = [];
	for(let i = 0; i < fileOp.countFiles(); i++){
	  arr.push(i);
	}
	//setDecks(arr);
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
      
	</div>
  )
}
export default CreateDeckPage;


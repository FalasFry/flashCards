import { useEffect, useState } from "react"
import FlashCard from "../components/FlashCard"
import FileOperations from "../components/FileOperations";
import { useNavigate, useOutletContext } from 'react-router-dom'

function LoadDeckPage() {

    const { cards, decks, setDecks, setCards } = useOutletContext();
    const [ deckInfo, setDeckInfo ] = useState([]);


    useEffect(() => {
        const fileOp = new FileOperations();
        setDeckInfo(fileOp.getDecksInfo());
    },[])

    return (
	    <div>
            <h1>Decks</h1>
            <div className="decksGrid">
            {deckInfo.map(name => {return(
                <DeckDisplay name={name} setCards={setCards}/>
            )})}
            </div>

	    </div>
    )
}
export default LoadDeckPage;

function DeckDisplay({ name, setCards }){
    const navigate = useNavigate();

    function loadSelectedDeck(fileName){
        let fileOp = new FileOperations();
        let obj = fileOp.handleLoadData(`${fileName}.json`);
        console.log(obj);
        setCards(Object.entries(obj));
        navigate("/");
    }

    return(
        <div className="deckDisplay">
            <h4>{name}</h4>
            <button onClick={() => loadSelectedDeck(name)} className="displayBtn">Load</button>
        </div>
    )
}


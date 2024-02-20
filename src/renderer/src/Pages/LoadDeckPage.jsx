import FileOperations from "../components/FileOperations";
import { useNavigate, useOutletContext } from 'react-router-dom'

function LoadDeckPage() {

    const { setCards, deckInfo, setDeckObj, setSelectedDeck  } = useOutletContext();

    return (
	    <div>
            <div className="navBarContainer">
                <div className="navBar">
                <button>Load Deck of Cards</button>
                <button>Create New Deck</button>
                </div>
            </div>

            <h1>Decks</h1>
            <h4>Select deck to load</h4>
            <div className="decksGrid">
            {deckInfo.map(name => {return(
                <DeckDisplay key={name} name={name} setCards={setCards} setDeckObj={setDeckObj} setSelectedDeck={setSelectedDeck}/>
            )})}
            </div>

	    </div>
    )
}
export default LoadDeckPage;

function DeckDisplay({ name, setCards, setDeckObj, setSelectedDeck }){
    const navigate = useNavigate();

    function load(fileName){
        let fileOp = new FileOperations();
        let obj = fileOp.handleLoadData(`${fileName}`);
        setSelectedDeck(fileName);
        setDeckObj(obj);
        setCards(Object.entries(obj));
    }

    function loadSelectedDeck(fileName){
        load(fileName);
        navigate("/");
    }

    function manageSelectedDeck(fileName){
        load(fileName);
        navigate("/manage-deck");
    }

    return(
        <div className="deckDisplay">
            <h4>{name}</h4>
            <button onClick={() => loadSelectedDeck(name)} className="displayBtn">Load</button>
            <button onClick={() => manageSelectedDeck(name)} className="displayBtn">Manage Deck</button>
        </div>
    )
}


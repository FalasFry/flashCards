import { useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom'
import FileOperations from "../components/FileOperations";
import '../assets/Pages/ManageDeckPage.css'

function ManageDeckPage() {
	
    const { cards, setCards, setCardData, selectedDeck, setDeckInfo, deckObj, setDeckObj } = useOutletContext();
    const navigate = useNavigate();

    function addCard(){
        setCardData({});
        navigate("/manage-card");
    }

    function deleteDeck(){
        const fileOp = new FileOperations();
		let info = {};
		let infoArr = fileOp.getDecksInfo();

		infoArr = infoArr.filter(element => element !== selectedDeck);
		info.decks = infoArr;
		fileOp.handleDecksInfo(info);
        fileOp.deleteDeckFile(selectedDeck);
        setDeckInfo(infoArr);

		//setDeckObj({});
		//setCards([]);
		//setSelectedDeck('');

        if(info.decks.length > 0) navigate("/load-deck");
        else navigate("/")
    }

    return (
		<div>
            <div className="navBarContainer">
                <div className="navBar">
                <button>Load Deck of Cards</button>
                <button>Create New Deck</button>
                </div>
            </div>
            
            <h1>Manage Deck</h1>

            <button onClick={addCard}>Create Card</button>

            <button onClick={deleteDeck}>Delete Deck</button>

            <div className="cardContainer">
                {cards.map((card, cardIndex) => {return(
                    <div key={cardIndex}>
                        <CardDisplay card={card} setCards={setCards} setCardData={setCardData} deckObj={deckObj} setDeckObj={setDeckObj} selectedDeck={selectedDeck} />
                    </div>
                )})}
            </div>

		</div>
	)
}
export default ManageDeckPage;


function CardDisplay({ card, setCardData, deckObj, setDeckObj, selectedDeck, setCards }){
    const navigate = useNavigate();

    function editSelectedCard(){
        setCardData(card[1]);
        navigate("/manage-card")
    }

    function deleteSelectedCard(){
        const fileOp = new FileOperations();
        let newObj = deckObj;

        delete newObj[card[0]];
        setDeckObj(newObj);

        fileOp.handleSaveData(deckObj, selectedDeck);
        setCards(Object.entries(deckObj));
    }

    return(
        <div className="cardDisplay">
            <h4>{card[1].Question}</h4>
            <button onClick={editSelectedCard} className="displayBtn">Edit</button>
            <button onClick={deleteSelectedCard} className="displayBtn">Delete</button>
        </div>
    )
}


import { useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom'
import FileOperations from "../components/FileOperations";

function ManageDeckPage() {
	
    const { cards, setCardData, selectedDeck, setDeckInfo } = useOutletContext();
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
        
            <h1>Manage Deck</h1>

            <button onClick={addCard}>Create Card</button>

            <button onClick={deleteDeck}>Delete Deck</button>

            <div className="cardContainer">
                {cards.map((card, cardIndex) => {return(
                    <div key={cardIndex}>
                        <CardDisplay card={card} setCardData={setCardData}/>
                    </div>
                )})}
            </div>

		</div>
	)
}
export default ManageDeckPage;


function CardDisplay({ card, setCardData }){
    const navigate = useNavigate();

    function editSelectedCard(){
        setCardData(card[1]);
        navigate("/manage-card")
    }

    function deleteSelectedCard(){
        // TODO
    }

    return(
        <div className="cardDisplay">
            <h4>{card[1].Question}</h4>
            <button onClick={editSelectedCard} className="displayBtn">Edit</button>
            <button className="displayBtn">Delete</button>
        </div>
    )
}


import { useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom'

function ManageDeckPage() {
	
    const { cards, cardData, setCardData, deckObj, setDeckObj } = useOutletContext();

    const [ deck, setDeck ] = useState({
        0:{
            "Question": '',
            "Answer": '',
            "Hint": ''
        },
    });


    function addCard(){
        const newKey = String(Object.keys(deck).length)
        setDeck({
            ...deck,
            newKey: cardData
        })
    }

    return (
		<div>
        
            <h1>Manage Deck</h1>

            <button>Create Card</button>

            <button>Delete Deck</button>

            <div className="cardContainer">
                {cards.map(card => {return(
                    <>
                        <CardDisplay card={card} setCardData={setCardData} cardData={cardData}/>
                    </>
                )})}
            </div>

		</div>
	)
}
export default ManageDeckPage;


function CardDisplay({ card, setCardData, cardData }){
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


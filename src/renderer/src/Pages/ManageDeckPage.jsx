import { useState } from "react";

function ManageDeckPage() {
	
    const [ deck, setDeck ] = useState({
        0:{
            "Question": '',
            "Answer": '',
            "Hint": ''
        },
    });

    const  [cardData, setCardData ] = useState({
        "Question": '',
        "Answer": '',
        "Hint": ''        
    })


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

		</div>
	)
}
export default ManageDeckPage;


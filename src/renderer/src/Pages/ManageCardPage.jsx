import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom'
import FileOperations from "../components/FileOperations";

function ManageCardPage() {

    const { cardData, setCardData, deckObj, setDeckObj, selectedDeck, setCards } = useOutletContext();
    const navigate = useNavigate();
    const fileOp = new FileOperations();

    const [ submitted, setSubmitted ] = useState(false);

    useEffect(() => {
        
        if(submitted){
            fileOp.handleSaveData(deckObj, selectedDeck);
            setCards(Object.entries(deckObj));
            navigate("/manage-deck");
        }
    },[submitted])

    function findKeyInRange(end){
        for (let key = 0; key <= end; key++) {
          if (!deckObj.hasOwnProperty(String(key))) {
            return key;
          }
        }
        return String(Object.keys(deckObj).length);
      };

    function handleSubmit(e){
        e.preventDefault();
        
        if(cardData.Question === '' || cardData.Answer === '' || cardData.Hint === '') return;

        let newKey = findKeyInRange(Object.keys(deckObj).length);

        setDeckObj({
            ...deckObj,
            [newKey]: cardData
        });

        setSubmitted(true);
    }

    function handleChange(e){
        const { name, value } = e.target;
		setCardData({
			...cardData,
			[name]: value
		});
    }

    return (
		<div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Question" defaultValue={cardData.Question} onChange={handleChange}/>
                <input type="text" name="Answer" defaultValue={cardData.Answer} onChange={handleChange}/>
                <input type="text" name="Hint" defaultValue={cardData.Hint} onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
		</div>
	)
}
export default ManageCardPage;


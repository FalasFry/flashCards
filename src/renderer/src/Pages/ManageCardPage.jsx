import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom'
import FileOperations from "../components/FileOperations";
import FlashCard from "../components/FlashCard";
import '../assets/Pages/ManageCardPage.css'

function ManageCardPage() {

    const { cardData, setCardData, deckObj, setDeckObj, selectedDeck, setCards } = useOutletContext();
    const navigate = useNavigate();
    const fileOp = new FileOperations();

    const [ submitted, setSubmitted ] = useState(false);

    const [ clicked, setClicked ] = useState(false);

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
            <div className="navBarContainer">
                <div className="navBar">
                <button onClick={() => navigate("/manage-deck")}>Back</button>
                </div>
            </div>

            <div className="createCardFormContainer">
                <div className="formDiv">
                    <form className="createCardForm" onSubmit={handleSubmit}>
                        <label htmlFor="question">Question</label>
                        <input className="inputText" id="question" type="text" name="Question" onSelect={() => setClicked(false)} value={cardData.Question} placeholder="question" onChange={handleChange}/>

                        <label htmlFor="answer">Answer</label>
                        <input className="inputText" id="answer" type="text" name="Answer" onSelect={() => setClicked(true)} value={cardData.Answer} placeholder="answer" onChange={handleChange}/>
                        
                        <label htmlFor="hint">Hint</label>
                        <input className="inputText" id="hint" type="text" name="Hint" value={cardData.Hint} placeholder="hint" onChange={handleChange}/>

                        <button className="submitCardBtn" type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <FlashCard 
                        question={cardData.Question} 
                        answer={cardData.Answer} 
                        hint={cardData.Hint}
                        clicked={clicked} 
                        setClicked={setClicked}
                        small={true} />
                </div>
            </div>
            
		</div>
	)
}
export default ManageCardPage;


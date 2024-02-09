import { useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom'
import FileOperations from "../components/FileOperations";

function ManageCardPage() {

    const { cardData, setCardData, deckObj, setDeckObj } = useOutletContext();
	

    function handleSubmit(e){
        e.preventDefault();

        let newKey = String(Object.keys(deckObj).length);
        setDeckObj({
            ...deckObj,
            [newKey]: cardData
        })
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


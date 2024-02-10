import { useState } from "react"
import FileOperations from "../components/FileOperations";
import { useNavigate, useOutletContext } from "react-router-dom";

function CreateDeckPage() {

	const [ deckData, setDeckData ] = useState({name: ''});

	const { setCards, setDeckObj } = useOutletContext();

	const navigate = useNavigate();


	function submitDeck(e){
		e.preventDefault();
		let fileOp = new FileOperations();
		let info = {};
		let infoArr = fileOp.getDecksInfo();


		// TODO: 
		// CHECK IF infoARR contains deckData.name
		// IF yes, alert, new name needed
		// IF no, continue as usual.

		infoArr.push(deckData.name);
		info.decks = infoArr;
		fileOp.handleDecksInfo(info);
		fileOp.handleSaveData({}, deckData.name);

		let obj = fileOp.handleLoadData(`${deckData.name}.json`);
		setDeckObj(obj);
		setCards(Object.entries(obj));

		navigate("/manage-deck");
	}

	function handleChange(e){
		const { name, value } = e.target;
		setDeckData({
			...deckData,
			[name]: value
		});
	};


	return (
		<div>
			<h1>Create New Deck</h1>
			<div onSubmit={submitDeck} style={{backgroundColor: "lightblue", display:"flex"}}>
				<form>
					<input name="name" onChange={handleChange} type="text"/>
					<button type="submit">Submit</button>
				</form>
			</div>
		
		</div>
	)
}
export default CreateDeckPage;


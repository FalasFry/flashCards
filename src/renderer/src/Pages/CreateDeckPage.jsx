import { useState } from "react"
import FileOperations from "../components/FileOperations";
import { useNavigate, useOutletContext } from "react-router-dom";

function CreateDeckPage() {

	const [ deckData, setDeckData ] = useState({name: ''});

	const { setCards, setDeckObj, setSelectedDeck } = useOutletContext();

	const navigate = useNavigate();


	function submitDeck(e){
		e.preventDefault();
		let fileOp = new FileOperations();
		let info = {};
		let infoArr = fileOp.getDecksInfo();

		if(deckData.name === "decksInfo" || deckData.name === ""){
			alert("Cant use that name");
			return;
		}

		if(infoArr.includes(deckData.name)){
			alert("Deck with that name already exists");
			return;
		}

		infoArr.push(deckData.name);
		info.decks = infoArr;
		fileOp.handleDecksInfo(info);
		fileOp.handleSaveData({}, deckData.name);

		let obj = fileOp.handleLoadData(`${deckData.name}.json`);
		setDeckObj(obj);
		setCards(Object.entries(obj));
		setSelectedDeck(deckData.name);

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


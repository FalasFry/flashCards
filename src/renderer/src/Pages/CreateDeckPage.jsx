import { useState } from "react"
import FileOperations from "../components/FileOperations";
import { useNavigate } from "react-router-dom";

function CreateDeckPage() {

	const [ deckData, setDeckData ] = useState({name: ''});
	const navigate = useNavigate();

	function submitDeck(e){
		e.preventDefault();
		let fileOp = new FileOperations();
		let info = {};
		let infoArr = fileOp.getDecksInfo();
		infoArr.push(deckData.name);
		info.decks = infoArr;
		fileOp.handleDecksInfo(info);

		navigate("/manage-deck");
	}

	function handleChange(e){
		const { name, value } = e.target;
		setDeckData({
			...deckData,
			[name]: value
		});
		console.log(deckData);
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


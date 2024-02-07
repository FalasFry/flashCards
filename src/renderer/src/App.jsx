import { useState } from "react"

function App() {

  const [ cards, setCards ] = useState([]);
  const [ cardIndex, setCardIndex ] = useState(0);


  return (
    <div className="container">

      <div className="flashCard">
        <div className="flashCard-inner">
          <div className="frontCard">
            <button>Hint</button>
            <h2>Question</h2>
          </div>
          <div className="backCard">
            <h5>Answer</h5>
            <p>...</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

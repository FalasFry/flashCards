import { useState } from "react";

function FlashCard({ question, answer, hint, clicked, setClicked }){
  


  function cardPress(){
    setClicked(curr => curr = !curr);
  }

    return(
      <div className={clicked ? "flashCard-c" : "flashCard"} onClick={cardPress}>
        <div className="flashCard-inner">
          <div className="frontCard">
            <h2>{question}</h2>
          </div>
          <div className="backCard">
            <h5>Answer</h5>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    )
}
export default FlashCard;
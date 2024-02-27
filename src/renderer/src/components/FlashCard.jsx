import { useEffect, useState } from 'react';
import '../assets/Components/FlashCard.css'

function FlashCard({ question, answer, hint, clicked, setClicked, small }){
  
    const [ style, setStyle ] = useState('');

    function cardPress(){
        setClicked(curr => curr = !curr);
    }
    
    useEffect(() => {
        small ? setStyle("flashCard-s") : setStyle("flashCard")
    })

    return(
      <>
        <div className={clicked ? style+"-c" : style} onClick={cardPress}>
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
      </>
    )
}
export default FlashCard;
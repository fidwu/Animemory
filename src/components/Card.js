import { useState } from "react";

const Card = (props) => {

    const [flipped, setFlipped] = useState(props.flipped);
    const [compareCards, setCompareCards] = useState([]);
    const compare = []

    const flipCard = () => {
        setFlipped(!flipped)
        const cardInfo = {"name": props.name, "flipped": flipped}
        setCompareCards(prevArray => [...prevArray, cardInfo])
        compare.push(cardInfo)
    }

    const checkCard = () => {
        console.log(compareCards)
        if (compareCards.length === 2) {
            console.log(compareCards)
        }
    }
    
    const back = () => {
        return (
            <div className="card-back"></div>
        )
    }

    const front = () => {
        const image = require(`../assets/${props.img}`).default
        return props.answer ?
            <h3>{props.answer && props.name}</h3>
            : <img src={image} width="70" height="70" alt={`${props.name}`} />
    }

    return (
        <div className="card" onClick={() => { flipCard(); checkCard(); }}>
            {flipped
                ? front()
                : back()
            }
        </div>
    )
}

export default Card;
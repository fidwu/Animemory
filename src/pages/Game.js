import { useState, useEffect } from "react";
import Card from '../components/Card';
import AnimalData from '../components/AnimalData';

const Game = () => {

    const [cards, setCards] = useState([])
    const [compareCards, setCompareCards] = useState([])
    const [matched, setMatched] = useState([])
    const [livesLeft, setLivesLeft] = useState(5)

    useEffect(() => {
        randomize();
    }, [])

    const randomize = () => {
        const animalPic = AnimalData.map((animal) => ({
            ...animal, answer: false
        }));
        const animalText = AnimalData.map((animal) => ({
            ...animal, answer: true
        }));
        const animalsList = [...animalPic, ...animalText];
        for (let i = 0; i < animalsList.length - 1; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = animalsList[i];
            animalsList[i] = animalsList[j];
            animalsList[j] = temp;
        }
        console.log(animalsList)
        setCards(animalsList);
    }

    const compareCard = (name, answer) => {
        setCompareCards(prevArray => [...prevArray, name])
        // flip cards when comparing
        setCards(cards.map((card) => {
            if (card.name === name && card.answer === answer) {
                card.flipped = true
                return card
            }
            return card;
        }))
    }

    useEffect(() => {
        console.log(compareCards)
        if (compareCards.length === 2) {
            const isMatch = compareCards[0] === compareCards[1]
            console.log(isMatch)
            if (isMatch) {
                console.log("in here 1")
                setMatched(prevArray => [...prevArray, compareCards[0]])
            }
            else {
                // reset card flips to false
                setTimeout(() => { 
                    setCards(cards => cards.map((card) => {
                        if (card.name === compareCards[0] || card.name === compareCards[1]) {
                            card.flipped = false
                        }
                        return card;
                    }))
                    setLivesLeft(livesLeft => livesLeft - 1)
                }, 800)
            }
            setCompareCards([])
        }
        
        // end game if no strikes left
        if (!livesLeft) {
            alert("End of game! No more strikes left!")
        }
    }, [compareCards, livesLeft])

    const displayStrikes = () => {
        var strikes = []
        console.log(livesLeft)
        // display full heart
        for (let i = 0; i < livesLeft; i++) {
            console.log("in 1")
            // strikes = [...strikes, <span className="fas fa-heart" key={i}></span>]
            strikes = [...strikes, <span className="fa-heart" key={i}>❤</span>]
        }
        // display outlined heart
        for (let i = livesLeft; i < 5; i++) {
            console.log("in 2")
            strikes = [...strikes, <span className="fa-heart" key={i}>♡</span>]
        }
        return strikes
    }

    return (
        <>
            <div className="controls">
                <div className="strikes">{livesLeft}</div>
                <div className="strikes-box">
                    {displayStrikes().map(strikes => strikes)}
                </div>
                <div className="timer">01:00</div>
                <div className="restart">Restart</div>
            </div>
            <div className="grid">
                {cards.map((animal, index) => (
                    <Card
                        key={index}
                        answer={animal.answer}
                        name={animal.name}
                        img={animal.image}
                        flip={animal.flipped}
                        onClick={() => compareCard(animal.name, animal.answer)}
                    />
                ))}
            </div>
        </>
    )
}

export default Game;
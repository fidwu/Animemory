import { useState, useEffect } from "react";
import Card from '../components/Card';
import AnimalData from '../components/AnimalData';
import ResultModal from "../components/ResultModal";

const Game = () => {

    const [cards, setCards] = useState([])
    const [compareCards, setCompareCards] = useState([])
    const [matched, setMatched] = useState([])
    const [livesLeft, setLivesLeft] = useState(5)
    const [result, setResult] = useState("")

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
        // flip cards when comparing
        setCards(cards.map((card) => {
            if (card.name === name && card.answer === answer && !card.flipped) {
                setCompareCards(prevArray => [...prevArray, name])
                card.flipped = true
                return card
            }
            return card;
        }))
    }

    useEffect(() => {
        // check if the 2 cards match
        if (compareCards.length === 2) {
            const isMatch = compareCards[0] === compareCards[1]
            if (isMatch) {
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
                }, 600)
            }
            setCompareCards([])
        }
        
        // end game if no strikes left
        if (!livesLeft) {
            setResult("lose")
        }

        // win game if lives left and all cards are matched
        if (livesLeft && matched.length === AnimalData.length) {
            setResult("win")
        }
    }, [compareCards, livesLeft, matched])

    const displayLives = () => {
        var heartArr = Array(5)
        // display full heart
        for (let i = 0; i < livesLeft; i++) {
            heartArr[i] = <span className="fas fa-heart" key={i}></span>
        }
        // display heart outline
        for (let i = heartArr.length - 1; i >= livesLeft; i--) {
            heartArr[i] = <span className="far fa-heart" key={i}></span>
        }
        return heartArr
    }

    const restartGame = () => {
        randomize()
        setCompareCards([])
        setMatched([])
        setLivesLeft(5)
        setResult("")
    }

    return (
        <>
            <div className="controls">
                <div className="lives-left-box">
                    {displayLives().map(lives => lives)}
                </div>
                {/* <div className="timer">01:00</div> */}
                <button className="game-btn restart" onClick={restartGame}>Restart</button>
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
            {result &&
                <ResultModal result={result}>
                    <button className="game-btn playagain" onClick={restartGame}>Play Again!</button>
                </ResultModal>
            }
        </>
    )
}

export default Game;
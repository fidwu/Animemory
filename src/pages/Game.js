import Card from '../components/Card';
import AnimalData from '../components/AnimalData';

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
    console.log(animalsList);
    return animalsList;
}

const Game = () => {
    return (
        <>
            <div className="controls">
                <div className="strikes">XXXXX</div>
                <div className="timer">01:00</div>
                <div className="restart">Restart</div>
            </div>
            <div className="grid">
                {randomize().map((animal, index) => (
                    <Card
                        key={index}
                        answer={animal.answer}
                        name={animal.name}
                        img={animal.image}
                        flipped={animal.flipped}
                    />
                ))}
            </div>
        </>
    )
}

export default Game;
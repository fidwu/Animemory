import ReactCardFlip from "react-card-flip"

const Card = (props) => {
    
    const back = () => {
        return (
            <div className="card-back"></div>
        )
    }

    const front = () => {
        const image = require(`../assets/${props.img}`).default
        return (
            <div className="card-front">
                { props.answer ?
                <h3>{props.answer && props.name}</h3>
                : <img src={image} width="70" height="70" alt={`${props.name}`} /> }
            </div>
        )
    }

    return (
        <ReactCardFlip isFlipped={!props.flip} flipDirection="horizontal">
            <div className="card" onClick={() => { props.onClick(); }}>
                { front() }
            </div>
            <div className="card" onClick={() => { props.onClick(); }}>
                { back() }
            </div>
        </ReactCardFlip>
    )
}

export default Card;
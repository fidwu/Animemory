const Card = (props) => {
    
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
        <div className="card" onClick={cardClicked}>
            {props.flipped
                ? front()
                : back()
            }
        </div>
    )
}

export default Card;
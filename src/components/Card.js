const Card = (props) => {
    return (
        <div className="card">
            {
                props.answer ?
                <h3>{props.answer && props.name}</h3>
                : <img src={`${props.img}`} width="70" height="70" alt={`${props.name}`} />
            }
            
        </div>
    )
}

export default Card;
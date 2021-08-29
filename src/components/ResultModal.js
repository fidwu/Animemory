import trophy from "../assets/trophy.png"
import sadFace from "../assets/sad.png"

const ResultModal = ({result, children}) => {
    return (
        <div className="result-modal">
            <div className="modal-content">
                {result === "win" &&
                    <>
                        <h1>You won!</h1>
                        <p>Congratualations!</p>
                        <img src={trophy} alt="trophy" width="50" height="auto" className="result-image" />
                    </>
                }
                {result === "lose" &&
                    <>
                        <h1>You lost :(</h1>
                        <p>Better luck next time!</p>
                        <img src={sadFace} alt="sad face" width="50" height="auto" className="result-image" />
                    </>
                }
                {children}
            </div>
        </div>
    )
}

export default ResultModal

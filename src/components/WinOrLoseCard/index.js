import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props
  const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const isWin = score < 12 ? 'You Lose' : 'You Won'
  const finalText = score < 12 ? 'Score' : 'Best Score'
  const finalImage = score < 12 ? loseImage : wonImage
  const playAgain = () => {
    onPlayAgain()
  }
  return (
    <div className="result-back-container">
      <div className="result-container">
        <h1 className="result">{isWin}</h1>
        <p className="score-text">{finalText}</p>
        <p className="game-score">{score}/12</p>
        <button className="play-btn" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img className="win-lose-image" alt="win or lose" src={finalImage} />
    </div>
  )
}
export default WinOrLoseCard

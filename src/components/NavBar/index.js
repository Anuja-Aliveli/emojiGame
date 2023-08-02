import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  return (
    <div className="nav-container">
      <div className="score-container">
        <img
          className="nav-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="score">Emoji Game</h1>
      </div>
      {!gameOver && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props
    this.state = {
      score: 0,
      topScore: 0,
      sortEmojisList: emojisList,
      checkList: [],
      gameOver: false,
    }
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {checkList, score} = this.state
    const isFind = checkList.includes(id)
    const last = score === 11 && !isFind
    if (isFind || last) {
      this.setState(prevState => ({gameOver: true, score: prevState.score + 1}))
    } else {
      this.setState(prevState => ({
        checkList: [...prevState.checkList, id],
        score: prevState.score + 1,
      }))
    }
    const newEmojiList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({sortEmojisList: newEmojiList})
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state
    const {emojisList} = this.props
    const updateScore = score > topScore ? score : topScore
    this.setState({
      score: 0,
      topScore: updateScore,
      sortEmojisList: emojisList,
      gameOver: false,
      checkList: [],
    })
  }

  render() {
    const {score, topScore, sortEmojisList, gameOver} = this.state
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        {!gameOver && (
          <ul className="list-container">
            {sortEmojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
        {gameOver && (
          <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
        )}
      </div>
    )
  }
}
export default EmojiGame

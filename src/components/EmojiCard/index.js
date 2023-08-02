import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const sortEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list">
      <button className="each-button" type="button" onClick={sortEmoji}>
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard

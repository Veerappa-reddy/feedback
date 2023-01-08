import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackButtonClicked: false}

  onClickEmoji = () => {
    this.setState(prevState => ({
      isFeedbackButtonClicked: !prevState.isFeedbackButtonClicked,
    }))
  }

  onRenderThankYouTab = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
        <h1 className="emoji-name">Thank You</h1>

        <p className="paragraph">
          We will use your feedback to improve customer support performance
        </p>
      </div>
    )
  }

  onRenderFeedbacksContainerTab = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-container-heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list-item">
              <button
                onClick={this.onClickEmoji}
                type="button"
                className="button"
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackButtonClicked} = this.state
    return (
      <div className="app-container">
        {isFeedbackButtonClicked
          ? this.onRenderThankYouTab()
          : this.onRenderFeedbacksContainerTab()}
      </div>
    )
  }
}

export default Feedback

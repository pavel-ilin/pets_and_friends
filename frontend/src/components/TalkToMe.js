import React from "react";
import "../index.css";
import ReactModal from 'react-modal'


export default class TalkToMe extends React.Component {

  state = {
    showModal: false,
    intervalID: null,
    timer: 0
  }

  handleTimer = () => {
    return window.setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000)
  }

  handleOpenModal = () => {
    this.props.pauseGame()
    this.setState({
      showModal: true
    })
    const intervalId = this.handleTimer()
    this.setState({
      intervalId: intervalId
    })
  }

  handleCloseModal = (event) => {
    this.props.resumeGame()
    this.setState({
      showModal: false
    })
    window.clearInterval(this.state.intervalId)
    this.props.increaseStats(event, this.state.timer)
    this.setState({
      timer: 0,
      intervalID: null
    })

  }

  componentDidMount() {
    ReactModal.setAppElement('body');
  }

  render() {
    return (
    <div>
      <button onClick={this.handleOpenModal}>Talk to Me</button>
      <ReactModal isOpen={this.state.showModal} className="socialModal">
        <div>
          <iframe
            title="Talk to Me Modal"
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/72804a76-996a-4e58-af18-5d96f8ea30a5">
          </iframe>
        </div>
        <button name="social" onClick={(event) => this.handleCloseModal(event)}>End Conversation</button>
      </ReactModal> 
    </div>

    )

  }
}
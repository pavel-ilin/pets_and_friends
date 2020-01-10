import React from "react";
import "../index.css";
import ReactModal from 'react-modal'
import Game from './Game'


export default class PlayWithMe extends React.Component {

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
                <button onClick={this.handleOpenModal}>Play With Me</button>
                <ReactModal isOpen={this.state.showModal} className="gameModal">
                    <div>
                      <Game />
                    </div>
                    <br />
                    <button name="fun" onClick={(event) => this.handleCloseModal(event)}>Stop Playing</button>
                </ReactModal>
            </div>

        )

    }
}
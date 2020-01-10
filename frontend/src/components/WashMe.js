import React from "react";
import "../index.css";
import ReactModal from 'react-modal'

export default class TalkToMe extends React.Component {

    state = {
        showModal: false,
        points: 0
    }

    handleOpenModal = () => {
        this.props.pauseGame()
        this.setState({
            showModal: true
        })
    }

    handleCloseModal = (event) => {
        this.props.resumeGame()
        this.setState({
            showModal: false
        })
        this.props.increaseStats(event, this.state.points)
        this.setState({
            points: 0
        })
    }

    handleClick = () => {
        this.setState({
            points: this.state.points + 1
        })
    }

    componentDidMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Wash Me</button>
                <ReactModal isOpen={this.state.showModal} className="hygieneModal">
                    <div>
                       <h1>Click to wash your pet!</h1>
                        <img alt="soap" onClick={this.handleClick} src={require("../imgs/bath.gif")} />
                        <h3>Hygiene Points: {this.state.points}</h3>
                    </div>
                    <button name="hygiene" onClick={(event) => this.handleCloseModal(event)}>Finish Bath</button>
                </ReactModal>
            </div>

        )

    }
}
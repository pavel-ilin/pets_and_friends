import React from "react";
import "../index.css";
import ReactModal from 'react-modal'



export default class FeedMe extends React.Component {

    state = {
        showModal: false,
        intervalID: null,
        active: false,
        hotdog: false,
        pancakes: false,
        cupcake: false,
        pizza: false,
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
            showModal: false,
            hotdog: false,
            pancakes: false,
            cupcake: false,
            pizza: false,
            points: 0
        })
        this.props.increaseStats(event, this.state.points)
    }

    handleShowClick = (event) => {
        const stateName = event.target.name
        let thesePoints = 0

        if(!this.state[stateName]){

            if (isNaN(event.target.dataset.points)) {
                thesePoints = 0
            }
            else {
                thesePoints = parseInt(event.target.dataset.points)
            }
            this.setState({
                [stateName]: true,
                points: this.state.points + thesePoints
            })
        }

    }

    handleHideClick = (event) => {
        const stateName = event.target.name
        let thesePoints = 0

        if (isNaN(event.target.dataset.points)) {
            thesePoints = 0
        }
        else {
            thesePoints = parseInt(event.target.dataset.points)
        }
        this.setState({
            [stateName]: false,
            points: this.state.points - thesePoints
        })
    }

    componentDidMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Feed Me</button>
                <ReactModal isOpen={this.state.showModal} className="hungerModal">
                    <img alt="hotdog" name="hotdog" data-points="5" onClick={this.handleShowClick} src={require("../imgs/hotdog.gif")} />
                    <img alt="pancakes" name="pancakes" data-points="10" onClick={this.handleShowClick} src={require("../imgs/pancakes.png")} />
                    <img alt="cupcake" name="cupcake" data-points="3" onClick={this.handleShowClick} src={require("../imgs/cupcake.png")} />
                    <img alt="pizza" name="pizza" data-points="15" onClick={this.handleShowClick} src={require("../imgs/pizza.png")} />
                    <br />
                    <h1>Selected Food:</h1>
                    {this.state.hotdog ? (<img alt="hotdog" name="hotdog" data-points="5" onClick={(event) => this.handleHideClick(event)} src={require("../imgs/hotdog.gif")} />) : ""}
                    {this.state.pancakes ? (<img alt="pancakes" name="pancakes" data-points="10" onClick={(event) => this.handleHideClick(event)} src={require("../imgs/pancakes.png")} />) : ""}
                    {this.state.cupcake ? (<img alt="cupcake" name="cupcake" data-points="3" onClick={(event) => this.handleHideClick(event)} src={require("../imgs/cupcake.png")} />) : ""}
                    {this.state.pizza ? (<img alt="pizza" name="pizza" data-points="15" onClick={(event) => this.handleHideClick(event)} src={require("../imgs/pizza.png")} />) : ""}

                    <br />
                    <h3>Total Food Points: {this.state.points}</h3>
                    <button name="hunger" onClick={(event) => this.handleCloseModal(event)}>Give Pet Food</button>
                </ReactModal>
            </div>

        )

    }
}
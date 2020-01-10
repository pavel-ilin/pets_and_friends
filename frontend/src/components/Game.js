import React, { Component } from 'react'

export default class Game extends Component {

    state = {
        randomNumber: 0,
        guessedNumber: 0,
        tries: 0
    }

    handleClick = () => {
        if(this.state.tries <= 10){
            if (this.state.guessedNumber === this.state.randomNumber) {
                alert("You won the game!")
            } else if(this.state.guessedNumber > this.state.randomNumber) {
                alert("Wrong number. Try guessing lower.")
                this.setState({
                    tries: this.state.tries + 1
                })
            } else {
                alert("Wrong number. Try guessing higher")
                this.setState({
                    tries: this.state.tries + 1
                })
            }
        } else {
            alert("I'm sorry, you don't have any more tries")
        }

    }

    handleChange = (event) => {
        this.setState({
            guessedNumber: event.target.value
        })
    }

    handlePlayAgainClick = () => {
        this.generateRandomNumber()
        this.setState({
            guessedNumber: 0
        })
    }

    generateRandomNumber = () => {
        this.setState({
            randomNumber: Math.floor((Math.random() * 100) + 1)
        })
    }

    componentDidMount(){
        this.generateRandomNumber()
    }


    render(){
        return(
            <div>
                <h1>Try to Guess the Number!</h1>
                 <h2>Between 1 and 100</h2>
                <input type="number" value={this.state.guessedNumber} onChange={(event) => this.handleChange(event)}/>
                <button onClick={this.handleClick}>Guess</button>
                <button onClick={this.handlePlayAgainClick}>Play Again</button>
            </div>
        )
    }
}
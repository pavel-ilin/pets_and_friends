import React, { Component } from 'react';
import PetImage from './PetImage'
import Stats from './Stats'
import Actions from './Actions'
import Mood from './Mood'
import Pause from './Pause'
import Save from './Save'
import Resume from './Resume'

export default class App extends Component {

    state = {
        hunger: 5,
        social: 5,
        fun: 5,
        hygiene: 5,
        mood: "sad",
        // timer: 0,
        intervalId: null,
        adoptPetID: null,
        paused: false
    }

    increaseStats = (event, num=1) => {
        const stateName = event.target.name
        this.setState({
            [stateName]: this.state[stateName] + num
        }, () => this.changeMood())
    }

    decreaseStats = () => {
        return window.setInterval(() => {
            const newHungerState = this.state.hunger === 0 ? 0 : this.state.hunger - 1
            const newSocialState = this.state.social === 0 ? 0 : this.state.social - 1
            const newFunState = this.state.fun === 0 ? 0 : this.state.fun - 1
            const newHygieneState = this.state.hygiene === 0 ? 0 : this.state.hygiene - 1

            this.setState({
                hunger: newHungerState,
                social: newSocialState,
                fun: newFunState,
                hygiene: newHygieneState
            }, () => this.changeMood())
        }, 5000)
    }

    changeMood = () => {
        if (this.state.hunger >= 10 && this.state.social >= 10 && this.state.fun >= 10 && this.state.hygiene >= 10) {
            this.setState({
                mood: "happy"
            })
        } else if (this.state.hunger === 0 && this.state.social === 0 && this.state.fun === 0 && this.state.hygiene === 0) {
            this.setState({
                mood: "dead"
            })
        } else {
            this.setState({
                mood: "sad"
            })
        }
    }

    pauseGame = () => {
        window.clearInterval(this.state.intervalId)
        this.setState({
            paused: true
        })
    }

    resumeGame = () => {
        const intervalId = this.decreaseStats()
        this.setState({
            intervalId: intervalId,
            paused: false
        })
    }

    saveGame = () => {
        this.pauseGame()
        fetch(`https://pets-and-friends.herokuapp.com/${this.state.adoptPetID}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": localStorage.token
            },
            method: "PATCH",
            body: JSON.stringify({
                hunger: this.state.hunger,
                social: this.state.social,
                fun: this.state.fun,
                hygiene: this.state.hygiene
            })
        })
    }

    componentDidMount() {
        const intervalId = this.decreaseStats()
        this.setState({
            intervalId: intervalId
        })
        fetch(`https://pets-and-friends.herokuapp.com/users/${this.props.userID}`, {
          headers: {
            "Authorization": localStorage.token
          }
        })
        .then(r => r.json())
        .then(resObj => {
            const thisPet = resObj.adopt_pets.find(element => element.pet_id === this.props.pet.id)
            // console.log(thisPet)
            this.setState({
                hunger: thisPet.hunger,
                social: thisPet.social,
                fun: thisPet.fun,
                hygiene: thisPet.hygiene,
                adoptPetID: thisPet.id
            }, () => {
                this.changeMood()
            })
        })
    }

    componentWillUnmount(){
        this.pauseGame()
    }

    render() {
        return (
            <div>
                <header>
                </header>
                <button className="dashboard-button" onClick={this.props.handleClick}>See Your Dashboard</button>
                <PetImage pet={this.props.pet} />
                <Stats hunger={this.state.hunger} social={this.state.social}
                fun={this.state.fun} hygiene={this.state.hygiene} />
                <Actions hunger={this.state.hunger} social={this.state.social}
                fun={this.state.fun} hygiene={this.state.hygiene}
                increaseStats={this.increaseStats} increaseSocialStats={this.increaseSocialStats}
                pauseGame={this.pauseGame} resumeGame={this.resumeGame}/>
                <Mood mood={this.state.mood} />
                {this.state.paused? (<Resume handleClick={this.resumeGame} />) : (<Pause handleClick={this.pauseGame} />)}
                <Save handleClick={this.saveGame} />
            </div>
        )
    }
}

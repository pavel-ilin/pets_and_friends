import React, { Component } from 'react'

export default class PetImage extends Component {

    state = {
        picture: ""
    }

    componentDidMount(){
        fetch(`https://pets-and-friends.herokuapp.com/pets/${this.props.pet.id}`)
            .then(r => r.json())
            .then(resObj => {
                this.setState({
                    picture: resObj.image
                })
            })
    }

    render(){
        return(
            <img className="pet-image" alt="your pet" src={this.state.picture}/>
        )
    }
}

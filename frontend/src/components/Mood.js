import React, { Component } from 'react'

export default class Mood extends Component {
    renderImage = () => {
        if (this.props.mood === "happy") {
            return <img alt="smiley" src={require("../imgs/thumbsup2.png")} />
        } else if(this.props.mood === "dead") {
            return <img alt="dead" src={require("../imgs/RIP.png")}/>
        } else {
            return <img alt="frowny" src={require("../imgs/sad-face2.png")} />
        }
    }

    render(){

        const renderedImage = this.renderImage()

        return(
            <div className="mood">
                <h1>Mood</h1>
                {renderedImage}
            </div>
        )
    }
}
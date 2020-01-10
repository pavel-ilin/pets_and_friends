import React, { Component } from 'react'
import TalkToMe from './TalkToMe'
import FeedMe from './FeedMe'
import WashMe from './WashMe'
import PlayWithMe from './PlayWithMe'

export default class Actions extends Component {

    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>
                <ul>
                    <li><FeedMe pauseGame={this.props.pauseGame} resumeGame={this.props.resumeGame} increaseStats={this.props.increaseStats} /></li>
                    <li><TalkToMe pauseGame={this.props.pauseGame} resumeGame={this.props.resumeGame} increaseStats={this.props.increaseStats}/></li>
                    <li><PlayWithMe pauseGame={this.props.pauseGame} resumeGame={this.props.resumeGame} increaseStats={this.props.increaseStats}/></li>
                    <li><WashMe pauseGame={this.props.pauseGame} resumeGame={this.props.resumeGame} increaseStats={this.props.increaseStats}/></li>
                </ul>
            </div>
        )
    }
}



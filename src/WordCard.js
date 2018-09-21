import React, { Component } from 'react';

import CharacterCard from "./CharacterCard";
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attemt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [], completed: true})
            }
            else{
                this.setState({guess: [], attemt: this.state.attemt + 1})
            }
        }
    }

    render(){
        return(
            <div className="App">
                {
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value = {c} key = {i} attemt={this.state.attemt}
                        activationHandler = {this.activationHandler}/>
                    )
                }
                <div className="result">
                <p>Round : {this.state.attemt}</p>
                <p>{this.state.completed && this.state.attemt ==  1 ? "so clever, you can solved in first round." : ""}</p>
                <p>{this.state.completed && this.state.attemt >=  4 ? "good job but you should practice more." : ""}</p>
                <p>{this.state.completed ? alert('YOU ARE THE WINNER!') : ""}</p>
                </div>
                
            </div>
        )
    }
}
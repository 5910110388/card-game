import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "hello-react";
class App extends Component{
  render(){
    return(
      <div className="App">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <WordCard value={word}/>
      </div>
    );
  }
}

export default App;

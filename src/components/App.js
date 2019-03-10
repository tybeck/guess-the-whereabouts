'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';

import Background from './Background';
import Countdown from './Countdown';
import People from './People';
import ImageBackground from './ImageBackground';

class App extends Component {
  render() {
    return <div className="App">
      <div className="title">
        <h1>Guess the Whereabouts</h1>
      </div>
      <Countdown />
      <People />
      <ImageBackground />
      <Background />
    </div>
  }
}

export default App;
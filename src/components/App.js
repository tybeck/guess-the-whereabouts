import '../styles/App.sass'

import React, {Component} from 'react';

import Background from './Background';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return <div className="App">
      <h1>Guess the Whereabouts</h1>
      <Countdown/>
      <Background/>
    </div>
  }
}

export default App;
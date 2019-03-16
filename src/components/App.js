'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';

import Loading from './Loading';
import AppRenderer from './AppRenderer';

import Context from '../context';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  render() {
    return <div className="App">
      <Context.Provider value={this.state}>
        <Loading context={this} />
        <AppRenderer />
      </Context.Provider>
    </div>
  }
}

export default App;
'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';

import Loading from './containers/LoadingContainer';
import AppRenderer from './containers/AppRendererContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">
      <Loading />
      <AppRenderer />
    </div>;
  }
}

export default App;
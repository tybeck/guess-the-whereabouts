'use strict';

import React, {Component} from 'react';

const wordsearch = require('wordsearch');

class Wordsearch extends Component {
    componentDidMount() {
        console.log('wordsearch', wordsearch);
    }

    render() {
        return <div className="Wordsearch">wordsearch...</div>;
    }
}

export default Wordsearch;
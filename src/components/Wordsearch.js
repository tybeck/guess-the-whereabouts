'use strict';

import '../styles/Wordsearch.sass';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash';

class Wordsearch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ready: false,
            wordsearch: null
        };
    }

    componentDidMount() {
        return import('wordsearch')
            .then(wordsearch => {
                wordsearch = get(wordsearch, 'default');
                if (wordsearch) {
                    this.setState({ready: true, wordsearch});
                }
            });
    }

    _createWordsearch () {
        console.log(this.state.wordsearch(['boobs'], 20, 15));

    }

    render() {
        return <div className="Wordsearch">
            <button onClick={() => this._createWordsearch()}>Wordsearch</button>
        </div>;
    }
}

Wordsearch.propTypes = {
    load: PropTypes.bool,
    location: PropTypes.object,
    wordsearch: PropTypes.func
};

export default Wordsearch;
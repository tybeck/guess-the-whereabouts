'use strict';

import '../styles/NavigationButtons.sass';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

class NavigationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: this.props.currentDay,
            initialDay: this.props.currentDay
        };
        this.DAY_NUM_START = 15;
    }

    gotoNextLatestDay () {
        this.setState({ day: Math.min(Math.max(--this.state.day, 1), this.DAY_NUM_START) });
        this.props.changeDay(this.state.day);
    }

    gotoNextOldDay () {
        this.setState({ day: Math.min(Math.max(++this.state.day, 1), this.DAY_NUM_START) });
        this.props.changeDay(this.state.day);
    }

    render() {
        return <div className="NavigationButtons">
            <div hidden={this.state.initialDay >= this.state.day} onClick={() => this.gotoNextLatestDay()}><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div hidden={!(this.state.day < this.DAY_NUM_START)} onClick={() => this.gotoNextOldDay()}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>;
    }
}

NavigationButtons.propTypes = {
    changeDay: PropTypes.func.isRequired
};

export default NavigationButtons;
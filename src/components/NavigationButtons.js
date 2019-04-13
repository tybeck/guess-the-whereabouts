'use strict';

import '../styles/NavigationButtons.sass';

import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

class NavigationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: this.props.context.currentDay,
            initialDay: this.props.context.currentDay
        };
        this.DAY_NUM_START = 15;
    }

    gotoNextLatestDay () {
        this.setState({ day: Math.min(Math.max(--this.state.day, 1), this.DAY_NUM_START) });
        this.props.context.setDay(this.state.day);
    }

    gotoNextOldDay () {
        this.setState({ day: Math.min(Math.max(++this.state.day, 1), this.DAY_NUM_START) });
        this.props.context.setDay(this.state.day);
    }

    render() {
        return <div className="NavigationButtons">
            <div hidden={this.state.initialDay >= this.state.day} onClick={() => this.gotoNextLatestDay()}><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div hidden={!(this.state.day < this.DAY_NUM_START)} onClick={() => this.gotoNextOldDay()}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>;
    }
}

export default NavigationButtons;
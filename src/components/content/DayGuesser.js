'use strict';

import '../../styles/DayGuesser.sass'

import React, {Component} from 'react';
import {get, find} from 'lodash';

import NavigationButtons from '../NavigationButtons';

class DayGuesser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            locations: null,
            initialDay: null
        }
    }

    componentDidMount() {
        const day = this.props.context.currentDay;
        import(`../../locations`)
            .then(data => {
                const locations = get(data, 'default');
                if (locations) {
                    const location = find(locations, { day });
                    if (location) {
                        this.setState({location, locations, initialDay: day});
                    }
                }
            });
    }

    componentDidUpdate () {
        if (this.state.location.day !== this.props.context.currentDay) {
            const day = this.props.context.currentDay;
            const location = find(this.state.locations, { day });
            if (location) {
                this.setState({location});
            }
        }
    }

    render() {
        const day = get(this.props, 'context.currentDay') || 0;
        const locationName = (get(this.state, 'location.name') || '')
            .replace(' ', '-')
            .replace(',', '-')
            .toLowerCase();
        return this.state.location ? <div className="DayGuesser">
            <div className="day-bubble">
                <h1 className="location-name">{this.state.location.name}</h1>
                <p className="location-desc">{this.state.location.desc}</p>
            </div>
            <NavigationButtons context={this.props.context} />
            <p className="locations-days-left">
                {day === this.state.initialDay && <span>{day} days left</span>}
                {day !== this.state.initialDay && <span>Viewing day {day} of 15</span>}
            </p>
            <img src={this.state.location.image} className={locationName} />
        </div> : null;
    }
}

export default DayGuesser;
'use strict';

import '../styles/Countdown.sass'

import * as moment from 'moment';
import React, {Component} from 'react';

class Countdown extends Component {
    static END_DATE = '2019-07-07';
    // static END_DATE = '2019-04-25';

    constructor(props) {
        super(props);
        this.state = {
            days: Countdown.getDays()
        };
        this._run();
    }

    /**
     * @method getDays
     * @returns {number}
     */
    static getDays () {
        return Math.ceil(moment.duration(moment(Countdown.END_DATE).diff(moment())).asDays());
    }

    /**
     * @method _run
     * @private
     */
    _run () {
        setTimeout(() => this._update(), 1000);
    }

    /**
     * @method _update
     * @private
     */
    _update () {
        this.setState({ days: Countdown.getDays() });
        return this._run();
    }

    render() {
        return <div className="Countdown">in <span className="days">{this.state.days}</span> days</div>
    }
}

export default Countdown;
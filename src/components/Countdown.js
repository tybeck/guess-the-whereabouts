import '../styles/Countdown.sass'

import * as moment from 'moment';
import React, {Component} from 'react';

class Countdown extends Component {
    static END_DATE = '2019-07-08';

    constructor(props) {
        super(props);

        this.state = {
            days: Countdown.getDays()
        }
    }

    static getDays () {
        return Math.ceil(moment.duration(moment(Countdown.END_DATE).diff(moment())).asDays()) - 30;
    }

    _run () {
        setTimeout(() => {
            this.setState({ days: Countdown.getDays() });

            return this._run();
        }, 1000);
    }

    render() {
        this._run();
        return <div className="Countdown">{this.state.days} <span>days</span></div>
    }
}

export default Countdown;
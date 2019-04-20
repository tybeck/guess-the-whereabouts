'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Primary from './content/Primary';
import DayGuesser from './containers/DayGuesserContainer';

class AppRenderer extends Component {
    constructor(props) {
        super(props);
        this.DAY_NUM_START = 15;
    }

    render() {
        return <div className="AppRenderer">
            <div className="Content">
                {this.props.load && (
                    <div className="ContentArea">k
                        {this.props.currentDay > this.DAY_NUM_START && <Primary />}
                        {this.props.currentDay <= this.DAY_NUM_START && <DayGuesser />}
                    </div>
                )}
            </div>
        </div>
    }
}

AppRenderer.propTypes = {
    load: PropTypes.bool,
    currentDay: PropTypes.number
};

export default AppRenderer;
'use strict';

import {connect} from 'react-redux';
import React from 'react';

import DayGuesser from '../content/DayGuesser';

const mapDispatchToProps = () => {
    return {};
};

const mapStateToProps = state => {
    return {
        currentDay: state.currentDay
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DayGuesser);
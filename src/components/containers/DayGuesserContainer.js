'use strict';

import {connect} from 'react-redux';
import React from 'react';

import DayGuesser from '../content/DayGuesser';

import {changeLocation} from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => {
    return {
        changeLocation: location => {dispatch(changeLocation(location))}
    };
};

const mapStateToProps = state => {
    return {
        currentDay: state.currentDay
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DayGuesser);
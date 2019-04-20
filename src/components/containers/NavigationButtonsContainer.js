'use strict';

import {connect} from 'react-redux';
import React from 'react';

import {changeDay} from '../../constants/actionTypes';

import NavigationButtons from '../NavigationButtons';

const mapDispatchToProps = dispatch => {
    return {
        changeDay: day => dispatch(changeDay(day))
    };
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtons);
'use strict';

import {connect} from 'react-redux';
import React from 'react';

import {isAppLoaded} from '../../constants/actionTypes';

import Loading from '../Loading';

const mapDispatchToProps = dispatch => {
    return {
        isAppLoading: status => {dispatch(isAppLoaded(status))}
    };
};

const mapStateToProps = state => {
    return {
        load: state.load
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
'use strict';

import {connect} from 'react-redux';
import React from 'react';

import AppRenderer from '../AppRenderer';

const mapDispatchToProps = () => {
    return {};
};

const mapStateToProps = state => {
    return {
        load: state.load,
        currentDay: state.currentDay
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRenderer);
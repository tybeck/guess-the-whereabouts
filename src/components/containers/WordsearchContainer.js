'use strict';

import {connect} from 'react-redux';
import React from 'react';

import Wordsearch from '../Wordsearch';

const mapDispatchToProps = () => {
    return {};
};

const mapStateToProps = state => {
    return {
        load: state.load,
        location: state.location
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wordsearch);
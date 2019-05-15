'use strict';

import {CHANGE_LOCATION} from '../constants/actionTypes';

const changeLocation = (state = [], action) => {
    switch (action.type) {
        case CHANGE_LOCATION:
            return action.state;
        default:
            return state;
    }
};

export default changeLocation;
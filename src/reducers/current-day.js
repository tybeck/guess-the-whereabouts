'use strict';

import {CHANGE_DAY} from '../constants/actionTypes';

const currentDay = (state = [], action) => {
    switch (action.type) {
        case CHANGE_DAY:
            return action.state;
        default:
            return state;
    }
};

export default currentDay;
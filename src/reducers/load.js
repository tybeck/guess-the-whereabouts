'use strict';

import {IS_APP_LOADED} from '../constants/actionTypes';

const load = (state = [], action) => {
    switch (action.type) {
        case IS_APP_LOADED:
            return action.state;
        default:
            return state;
    }
};

export default load;
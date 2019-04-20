'use strict';

import {combineReducers} from 'redux';

import load from './load';
import currentDay from './current-day';

export default combineReducers({load, currentDay});
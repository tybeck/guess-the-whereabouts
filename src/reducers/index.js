'use strict';

import {combineReducers} from 'redux';

import load from './load';
import currentDay from './current-day';
import location from './location';

export default combineReducers({load, currentDay, location});
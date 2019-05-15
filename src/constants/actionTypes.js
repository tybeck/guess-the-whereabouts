'use strict';

// actions

export const IS_APP_LOADED = 'IS_APP_LOADED';
export const CHANGE_DAY = 'CHANGE_DAY';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';

// action creators

export function isAppLoaded (state) {
    return {type: IS_APP_LOADED, state};
}

export function changeDay (state) {
    return {type: CHANGE_DAY, state};
}

export function changeLocation (state) {
    return {type: CHANGE_LOCATION, state};
}
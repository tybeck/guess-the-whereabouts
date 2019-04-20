'use strict';

// actions

export const IS_APP_LOADED = 'IS_APP_LOADED';
export const CHANGE_DAY = 'CHANGE_DAY';

// action creators

export function isAppLoaded (state) {
    return {type: IS_APP_LOADED, state};
}

export function changeDay (state) {
    return {type: CHANGE_DAY, state};
}
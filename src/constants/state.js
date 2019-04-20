'use strict';

import Countdown from '../components/Countdown';

export const preloadedState = {
    currentDay: Countdown.getDays(),
    load: false
};
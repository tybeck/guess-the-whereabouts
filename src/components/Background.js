import '../styles/Background.sass'

import * as _ from 'lodash';
import React, {Component} from 'react';

import {COUNTRY_LIST} from '../constants/data';

class Background extends Component {
    static REPEAT = 10;

    static _getCountries () {
        let items = [];
        for (let i = 1; i <= Background.REPEAT; i++) {
            items = items.concat(_.shuffle(COUNTRY_LIST).join(' '));
        }
        return items.join(' ');
    }

    render() {
        const countries = Background._getCountries();
        return <div className="Background">{countries}</div>
    }
}

export default Background;
'use strict';

import '../styles/People.sass'

import React, {Component} from 'react';

import {PEOPLE} from '../constants/data';

class People extends Component {
    /**
     * @method _getPeople
     * @returns {Array}
     * @private
     */
    _getPeople () {
        const list = [];
        _.forEach(PEOPLE, person => {
            const source = `/images/profile/${person.src}`;
            list.push(
                <li key={person.name}>
                    <img src={source}/>
                    <span>{person.name}</span>
                </li>
            );
        });
        return list;
    }

    render() {
        const people = this._getPeople();
        return <div className="People">
            <ul className="people-list">
                {people}
            </ul>
        </div>
    }
}

export default People;
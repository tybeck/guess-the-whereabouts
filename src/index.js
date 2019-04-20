import './styles/index.sass';

import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import App from './components/App';

import configureAppStore from './configureAppStore';

import {preloadedState} from './constants/state';

render(
    <Provider store={configureAppStore(preloadedState)} >
        <App />
    </Provider>,
    document.querySelector('#app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import WebFont from 'webfontloader';
import './index.scss';


WebFont.load({
    google: {
        families: ['PT Sans', 'sans-serif']
    }
});

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
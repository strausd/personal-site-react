import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';

import App from './components/App';

import './styles/styles.scss';


const jsx = (
    <FadeIn>
        <App />
    </FadeIn>
);

ReactDOM.render(jsx, document.getElementById('root'));

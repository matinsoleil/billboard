import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

render(<App name='World' />, document.getElementById('root'));

render(<Message name='You' />, document.getElementById('footer'));


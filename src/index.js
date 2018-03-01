import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

render(<App name='World' /><Message name='taken' />, document.getElementById('root'));

//render(<App name='World' />, document.getElementById('root'));
//render(<Message name="Me" />, document.getElementById('root'));

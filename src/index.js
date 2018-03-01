import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

let Master = (<App name="world"><Message name="You">);

render(Master, document.getElementById('root'));

//render(<Message name='You' />, document.getElementById('footer'));


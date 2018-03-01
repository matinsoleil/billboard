import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';


render(<div><App name="york" /><Message name='You' /></div>, document.getElementById('root'));


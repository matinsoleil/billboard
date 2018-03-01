import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';


//render(){return [<App name="york" >,<Message name="help">]}


render(<div><App name="york" /><Message name='You' /></div>, document.getElementById('root'));


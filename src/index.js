import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';


var component = Components[itemData['itemClass']]);
return React.createElement(component, {
    data: itemData,
    key: itemData['id']
});

render(<div><App name="york" /><Message name='You' /></div>, document.getElementById('root'));


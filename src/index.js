import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';


var Component = React.createClass({
    render: function(){
    return(
    <div>
        <App />
        <Message />
    </div>
    )
    }
});

render(<Component />, document.getElementById('root'));

//render(<App name='World' />, document.getElementById('root'));
//render(<Message name="Me" />, document.getElementById('root'));

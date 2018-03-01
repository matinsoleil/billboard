import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

//render(<App name='World' />, document.getElementById('root'));

var All = React.createClass({
       render: function(){return(
                    <div>
                     <App name="help" />
                    <Message name="me" />
                     </div>
               );}
});

render(<All />,document.getElementById('root'));


//render(<App name='World' />, document.getElementById('root'));
//render(<Message name="Me" />, document.getElementById('root'));

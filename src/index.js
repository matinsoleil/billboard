import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

var texto = React.createClass({
  render: function(){ return (<a>Hola</a>);
  }
});

render(<div><App name="york" /><texto /><Message name='You' /></div>, document.getElementById('root'));


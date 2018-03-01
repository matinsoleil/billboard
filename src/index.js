import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';
import Copy from './components/Copy';

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

render(<div><App name="york" /><Hello toWhat="World" /><Message name='You' /></div>, document.getElementById('root'));


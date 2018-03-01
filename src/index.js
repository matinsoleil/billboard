import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

render(<div><App name="york" /><Message name='You' /></div>, document.getElementById('root'));


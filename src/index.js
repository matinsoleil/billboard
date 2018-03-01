import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
class Hello extends React.Component {render() {return <div>Hello {this.props.toWhat}</div>;}}
render(<div><App name='World' /><Hello toWhat='help' /></div>, document.getElementById('root'));

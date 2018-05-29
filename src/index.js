import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';
var DOMParser = require('xmldom').DOMParser;
import Service from './components/Service';
class Hello extends React.Component {render() {return <div>Hello {this.props.toWhat}</div>;}}
render(<div><App name='World' /><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

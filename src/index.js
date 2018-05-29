import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';



var http = require('http');

var simple ="texto ............";


import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;

class Hello extends React.Component {
var simple = "OK";
render() {
return <div>Hello {this.props.toWhat}..{ this.getXML()}</div>;
}

getXML(){

return this.simple;


}

render(<div><App name='World' /><span>{simple}</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

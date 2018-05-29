import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';



var http = require('http');

var simple ="texto ............";




import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;

class Hello extends React.Component {

render() {
return <div>Hello {this.props.toWhat}..{ this.getXML()}</div>;
}

getXML(){

this.message ="help";

return this.message;


}
}

render(<div><App name='World' /><span>SIMPLE</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

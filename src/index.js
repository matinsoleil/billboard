import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';



var simple ="texto ............";




import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;

class Hello extends React.Component {

render() {
this.text='';
this.text= this.getXML();
return <div>Hello {this.props.toWhat}..{this.text}</div>;
}

getXML(){

var http = require('http');

var options = {
  host:  'orion-component.herokuapp.com',
  path: '/layout'
};



return "help";


        }

}

render(<div><App name='World' /><span>SIMPLE</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

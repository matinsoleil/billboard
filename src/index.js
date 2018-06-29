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


var url = 'orion-component.herokuapp.com/layout';


const httpGet = url => {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
};

var body = await httpGet(url);

console.log(body);

return "help";

}

render(<div><App name='World' /><span>SIMPLE</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';



var simple ="texto ............";




import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;

class Hello extends React.Component {

render() {
this.text;
sample=this.getXML(this.text);
return <div>Hello {this.props.toWhat}..{sample}</div>;
}

getXML(callback){

var http = require('http');


return http.get({
        host: 'orion-component.herokuapp.com',
        path: '/'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            var text="hello world";
            callback('text text');
        });
    });



}

}

render(<div><App name='World' /><span>SIMPLE</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

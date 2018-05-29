import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';
var http = require('http');
var options = {
    host: 'orion-component.herokuapp.com',
    path: '/src/layout.xml'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();




import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;
class Hello extends React.Component {render() {return <div>Hello {this.props.toWhat}</div>;}}
render(<div><App name='World' /><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

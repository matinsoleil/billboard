import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';



var http = require('http');

var simple ="texto";

function getXML(callback) {

    return http.get({
        host: 'orion-component.herokuapp.com',
        path: '/src/layout.xml'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            callback({
                src: body,
            });
        });
    });

},





import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;
class Hello extends React.Component {render() {return <div>Hello {this.props.toWhat}</div>;}}
render(<div><App name='World' /><span>{simple}</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import App from './components/App';



var http = require('http');

var simple ="texto";


import Service from './components/Service';
var DOMParser = require('xmldom').DOMParser;

class Hello extends React.Component {

render() {
return <div>Hello {this.props.toWhat}..{ this.getXML()}</div>;
}

getXML(){

return http.get({
        host: 'personatestuser.org',
        path: '/email'
    }, function(response) {

        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
        return "hello";

        });

    });


}

}

render(<div><App name='World' /><span>{simple}</span><Hello toWhat='help' /><Service name='wilfrido' /></div>, document.getElementById('root'));

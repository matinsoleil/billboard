import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Bar from './components/Bar';
import App from './components/App';


var simple ="texto";

import Service from './components/Service';


var DOMParser = require('xmldom').DOMParser;

class Hello extends React.Component {

render() {
this.text='';
this.text= this.getXML();
return <div>MasterCombo {this.props.toWhat}..{this.text}</div>;
}

getXML(){

var http = require('http');
var url = '/layout',
data=this.getContent(url);
data.then(function(html){

  console.log(html);

});

return "help";
}


getContent(url){

return new Promise((resolve, reject) => {
    // select http or https module, depending on reqested url
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
         reject(new Error('Failed to load page, status code: ' + response.statusCode));
       }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
    })


}



}

var task = 1;





render(<div><Bar /><App name='World' /><span>SIMPLE{task}</span><Hello toWhat='start' /><Service name='Orion' attribute='Stars' /></div>, document.getElementById('root'));

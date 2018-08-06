import React from 'react';
import { render } from 'react-dom';
import Grid from './components/Grid';
import Tooltip from './components/Tooltip';


const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<div><Tooltip /><Grid /></div>, rootElement);
}

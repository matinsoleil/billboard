import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import 'src/assets/stylesheets/base.scss';


function App({ name }) {
  return (
    <Button variant="contained" color="primary" > Build Width, {name}!</Button>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;

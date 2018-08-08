import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';



function App({ name }) {
  return (
    <div> Build Width, {name}!</div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;

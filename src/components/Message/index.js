import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';


function Message({ name }) {
  return (
    <h1>Hep, {name}!</h1>
  );
};

Message.propTypes = {
  name: PropTypes.string,
};

export default Message;

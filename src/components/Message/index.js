import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';

function Warning({error}){
    return (<a>there are a {error}</a>);
}


function Message({ name }) {
  return (
    <h1>Hep, {name}!</h1>
  );
};

Message.propTypes = {
  name: PropTypes.string,
};

Warning.propTypes = { error: PropTypes.string };

export default Message Warning;

import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';

var context = {title:'React In Patterns'};

class Request extends React.Component {
 getChildContext(){
 return context;
 }
};


Request.childContextTypes = {
  title: Reaxt.PropTypes.string,
};

export default Request;

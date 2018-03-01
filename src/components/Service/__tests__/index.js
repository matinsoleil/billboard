import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';


class Service extends React.Component {
 render(){
 return(<h1>Hello, {this.props.name}</h1>);
 }

}


Service.propTypes = {
  name: PropTypes.string,
};

export default Service;

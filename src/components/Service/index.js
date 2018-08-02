import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';


class Service extends React.Component {
 render(){
 return(<h1 name={this.props.attribute} >Hijo, {this.props.name}</h1>);
 }

}


Service.propTypes = {
  name: PropTypes.string,
  attribute: PropTypes.string
};

export default Service;

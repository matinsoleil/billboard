import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';

class Copy extends React.Component{
render(){
const name = this.props.name
return (<div>{name}</div>);
}
}

Copy.propTypes = {
  name: PropTypes.string,
};

export default Copy;

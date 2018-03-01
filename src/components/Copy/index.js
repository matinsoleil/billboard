import PropTypes from 'prop-types';

class Copy extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

Copy.propTypes = {
  children: PropTypes.element.isRequired
};

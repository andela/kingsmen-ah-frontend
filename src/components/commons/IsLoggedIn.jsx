import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class IsLoggedIn extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render() {
    const { history, isAuthenticated } = this.props;
    if(!isAuthenticated) {
      return history.push('/');
    }
    return (
      <Fragment /> 
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});
IsLoggedIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
export default connect(
  mapStateToProps,
  { history }
)(withRouter(IsLoggedIn));
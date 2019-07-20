import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '@components/commons/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, profile, isAuthenticated } = this.props;

    return (
      <div className='bg-gray-100 font-sans w-full min-h-screen m-0'>
        <Header
          user={{ user: { ...user, isAuthenticated } }}
          profile={profile}
        />
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
  profile: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(
  mapStateToProps,
  {}
)(Home);

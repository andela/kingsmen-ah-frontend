import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '@components/commons/Header';
import {fetchGuest} from '@actions/profile';
import Footer from '@components/commons/utilities/Footer';
import ProfileImage from './ProfileImage';
import ProfileDisplay from './ProfileDisplay';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [ 'Followers', 'Articles', 'Bookmarks' ],
      clickedTab: 'Articles',
      isMyProfile: false
    }
  }

  componentDidMount() {
    const { user: {username}, fetchGuest, history  } = this.props;
    const { match: { params: { username: usernameURL } } } = this.props;
    if (username === usernameURL) {
      this.setState({
        isMyProfile: true
      });
    }
    fetchGuest(usernameURL, history);
  }
  render() {
    const { user, profile, isAuthenticated} = this.props;
    const {tabs, clickedTab, isMyProfile} = this.state;
    
    return (
      <div>
        <Header
          user={{ user: { ...user, isAuthenticated } }}
          profile={profile}
        />
        <div className="flex flex-col full-height">
          <div className="profile-container">
            <ProfileImage profile={profile} user={user} myProfile={isMyProfile} />
          </div>
          <ul className="justify-center flex py-2 border-b-2 font-sans ">
            {tabs.map(tab => {
        return (
          <li key={tab} className="w-30 text-center">
            <a
              onClick={(e) => {
                e.preventDefault()
                this.setState({
                  clickedTab: tab
                })
              }} 
              href={tab}
              className={`${(tab === clickedTab ? 'active': '')} text-center mr-8 text-gray text-sm hover:font-bold px-5`}
            >
              {tab}
            </a>
          </li>
        )
      })}
          </ul>
          <div className="flex-1">
            <ProfileDisplay tab={clickedTab} />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
  profile: PropTypes.shape({
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string
    })
  }).isRequired,
  fetchGuest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});
export default connect(
  mapStateToProps,
  {fetchGuest, }
)(Profile);

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '@components/commons/Header';
import PropTypes from 'prop-types';
import Footer from '@components/commons/utilities/Footer';
import Button from '@components/commons/utilities/Button';
import FontAwesome from '@components/commons/utilities/FontAwesome';
import IsLoggedIn from '@components/commons/IsLoggedIn';
import { faCamera } from '@fortawesome/fontawesome-free-solid';
import { updateProfile } from '@actions/profile';
import './Profile.scss';

const instance = axios.create({
  headers: {}
});

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        avatar: '',
        bio: '',
        phone: '',
        firstname: '',
        lastname: '',
        location: ''
      }
    }
  }
  componentDidMount(){
    const { profile } = this.props;
    this.setState({
      profile: {
        ...profile
      }
    })
  }
  handleImage = (e) => {
    const { profile } = this.state;
    e.preventDefault();
    const file = document.getElementById('file');
    file.click();
    file.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      const response = await instance.post(CLOUDINARY_URL, formData);
        if (response.data.secure_url !== '') {
          const avatar = response.data.secure_url;
          this.setState({
            profile: {
              ...profile,
              avatar,
            }
          });
        }
      });
  }
  handleChange =(e) => {
    const { profile } = this.state;
    
    this.setState({
      profile: {
        ...profile,
        [e.target.name]: e.target.value
      }
    });
  }
  handleUpdate = () => {
    const { updateProfile, history, user: {username} } = this.props;
    const { profile } = this.state;
    const { firstname, lastname, avatar, phone, bio, location } = profile
    const updateObject = {
      avatar: avatar || '',
      location: location || '',
      firstname,
      lastname,
      phone: Number(phone, 10),
      bio,
    }
    updateProfile(updateObject);
    history.push(`/profile/${username}`);
  }
  render() {
    const { user, profile, isAuthenticated, history } = this.props;
    const { firstname, lastname } = profile;
    const { username } = user;
    const { profile: stateProfile } = this.state;
    const { firstname: first_name, lastname: last_name, bio, phone, avatar, location } = stateProfile;

    const avatarDefault = 'https://visualpharm.com/assets/344/Male%20User-595b40b65ba036ed117d4d28.svg';
    return (
      <Fragment>
        <IsLoggedIn isAuthenticated={isAuthenticated} />
        <Header
          user={{ user: { ...user, isAuthenticated } }}
          profile={profile}
        />
        <div className="flex-col flex full-height justify-center profile-container">
          <div className="flex flex-1 mt-5 flex-col md:flex-row md:profile-container">
            <div className="user flex flex-col items-center md:mt-10 md:flex-1 mb-5">
              <div className="cursor-pointer relative">
                <img src={avatar || avatarDefault} alt="avatar" className="avatar rounded-full border-solid border-white w-32 h-32 " />
                <input type="file" className="file" id="file" accept="image/*" />
                <span className="camera-avatar hide" id="camera-avatar">
                  <FontAwesome
                    type={faCamera}
                    styleClass='text-black-800 cursor-pointer text-4xl'
                    role='presentation'
                    onClick={this.handleImage}
                    onKeyDown={()=>{}}
                  />
                </span>
              </div>
              <h2 className="text-2xl text-center font-bold mt-5">{`${firstname || 'ade'} ${lastname || ''}`}</h2>
            </div>
            <div className="profile-update-form md:mt-10 profile-container flex-2">
              <div className="field flex">
                <span>
                Firstname:
                </span>
                <input 
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter firstname here"
                  className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
                  value={first_name || ''} 
                  onChange={this.handleChange}
                />
              </div>
              <div className="field flex">
                <span>Lastname</span>
                <input 
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter lastname here"
                  className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
                  value={last_name || ''} 
                  onChange={this.handleChange}
                />
              </div>
              <div className="field flex">
                <span>Bio</span>
                <input 
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Enter bio here"
                  className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
                  value={bio || ''} 
                  onChange={this.handleChange}
                />
              </div>
              <div className="field flex">
                <span>Location</span>
                <input 
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter your location"
                  className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
                  value={location || ''} 
                  onChange={this.handleChange}
                />
              </div>
              <div className="field flex">
                <span>Phone Number:</span>
                <input 
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone number"
                  className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
                  value={phone || ''} 
                  onChange={this.handleChange}
                />
              </div>
              <div className="flex mt-10 mb-10 buttons justify-center">
                <Button type="outlined" color="green" onClick={this.handleUpdate} onKeyDown={()=>{}}> Save </Button>
                <Button
                  type="outlined"
                  color="red"
                  onClick={() => {
                history.push(`/profile/${username}`);}}
                  onKeyDown={()=>{}}
                >
              Cancel
                </Button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    )
  }
}
EditProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.shape({}).isRequired,
  updateProfile: PropTypes.func.isRequired
}
EditProfile.defaultProps = {
  profile: {},
  isAuthenticated: false,
};
const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});
export default connect(
  mapStateToProps,
  {updateProfile}
)(withRouter(EditProfile));

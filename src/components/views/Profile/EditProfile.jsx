/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Header from '@components/commons/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '@components/commons/utilities/Footer';
import Button from '@components/commons/utilities/Button';
import FontAwesome from '@components/commons/utilities/FontAwesome';
import { faCamera } from '@fortawesome/fontawesome-free-solid';
import { getUserProfile, updateProfile } from '@actions/profile';
import './Profile.scss';

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;

class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state= {
      user: {
        isAuthenticated: true,
        username: 'adex001'
      },
      profile: {
        firstname: 'Adeoye',
        lastname: 'Olatunbosun',
        avatar: 'https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png',
        username: 'adex001',
        bio: null,
        phone: null,
        location: null,
      },
    }
  }

  componentWillMount() {
    const { user, profile } = this.state;
    const { username } = user;
    const { getUserProfile, profile: profile2 } = this.props;
    getUserProfile(username);
    this.setState({
      profile: {
        ...profile,
        ...profile2
      }
    })
  }

  handleChange = (e) => {
    const { profile } = this.state;
    
    this.setState({
      profile: {
        ...profile,
        [e.target.name]: e.target.value
      }
    });
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
      fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then((data) => {
            if (data.secure_url !== '') {
              const avatar = data.secure_url;
              this.setState({
                profile: {
                  ...profile,
                  avatar,
                }
              });
            }
          })
          .catch(err => (err));
      });
  }
  updateProfile = () => {
    const { profile, user } = this.state;
    const { updateProfile, history } = this.props;
    updateProfile(profile);
    history.push(`/profile/${user.username}`);
    
  }

  render() {
    const { user, profile} = this.state;
    const { history, profile: propsProfile  } = this.props;
    const { firstname: firstname2, lastname: lastname2 } = propsProfile;
    const { firstname, lastname, bio, avatar, phone, username } = profile;
    return (

      <div className="flex flex-col full-height">
        <div className='bg-gray-100 font-sans w-full  m-0'>
          <Header user={user} profile={profile} />
        </div>
        <div className="flex center-item flex-1 mt-5 flex-col lg:flex-row lg:mt-10">
          <div className="user pl-5 flex-1 flex flex-col items-center">
            <div className="cursor-pointer relative">
              <img src={avatar} alt={`${firstname} avatar`} className="avatar rounded-full border-solid border-white w-48 h-48" />
              <input type="file" className="file" id="file" accept="image/*" />
              <span className="camera-avatar hide" id="camera-avatar">
                <FontAwesome
                  type={faCamera}
                  styleClass='text-black-800 cursor-pointer text-6xl'
                  role='presentation'
                  onClick={this.handleImage}
                  onKeyDown={()=>{}}
                />
              </span>
            </div>
            <h2 className="text-2xl font-bold">{`${firstname2} ${lastname2}`}</h2>
          </div>
          <div className="flex-2 flex flex-col lg:mt-10">
            <span className="flex mb-5 lg:pl-5">
              <label className="label text-gray-700" htmlFor="firstname"> Firstname</label>
              <input
                className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400 "
                type="text" 
                placeholder="Enter firstname"
                name="firstname" 
                value={`${firstname}`} 
                onChange={this.handleChange}
              />
            </span>
            <span className="flex mb-5 lg:pl-5">
              <label className="label text-gray-700" htmlFor="lastname"> Lastname</label>
              <input
                className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400 "
                type="text" 
                placeholder="Enter lastname"
                name="lastname" 
                value={`${lastname}`} 
                onChange={this.handleChange}
              />
            </span>
            <span className="flex mb-5 lg:pl-5">
              <label className="label text-gray-700" htmlFor="bio">Bio</label>
              <input type="text" className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400 " placeholder="something interesting about you" name="bio" value={bio || ''} onChange={this.handleChange} />
            </span>
            <span className="flex mb-5 lg:pl-5">
              <label className="label text-gray-700" htmlFor="phone">Phone</label>
              <input type="phone" placeholder="enter phone number" name="phone" value={phone || ''} onChange={this.handleChange} className="flex-2 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400" />
            </span>
            <div className="flex justify-center">
              <Button type="outlined" color="green" onClick={this.updateProfile} onKeyDown={()=>{}}> Save </Button>
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
    )
  }
}

EditProfile.propTypes = {
  profile: PropTypes.objectOf(PropTypes.shape({
    
  })).isRequired,
  getUserProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired
  // history: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { getUserProfile, updateProfile })(withRouter(EditProfile));

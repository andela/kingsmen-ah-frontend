import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';

export default function ProfileImage({ profile, user }) {
  const { firstname, lastname, avatar } = profile;
  const { username } = user;

  const style = {
    background: 'white',
    border: '1px solid #335BCF',
    color: '#335BCF',
    padding: '3px 15px',
    borderRadius: '5px',
    fontSize: '0.7rem',
    fontFamily: 'Roboto'
  };
  const avatarDefault = 'https://visualpharm.com/assets/344/Male%20User-595b40b65ba036ed117d4d28.svg';
  return (
    <div>
      <div className="flex mb-5 mt-5">
        <img src={avatar || avatarDefault} alt='profile avatar' className="rounded-full border-solid border-white w-24 h-24" />
        <div className="ml-5">
          <h2 className="font-lobster text-3xl">{`${firstname || 'John'} ${lastname || 'Doe'}`}</h2>
          <Link to={`/profile/${username}/edit`} style={style}> Edit profile</Link>
        </div>
      </div>
    </div>
  )
}

ProfileImage.propTypes = {
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
}

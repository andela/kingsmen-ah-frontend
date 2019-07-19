import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';

export default function BigProfile({ profile }) {
  const { firstname, lastname, avatar, username } = profile;
  const style = {
    background: 'white',
    border: '1px solid #335BCF',
    color: '#335BCF',
    padding: '3px 15px',
    borderRadius: '5px',
    fontSize: '0.7rem',
    fontFamily: 'Roboto'
  };
  return (
    <div>
      <div className="flex mt-20 mb-16">
        <img src={avatar} alt={`${firstname} profile avatar`} className="rounded-full border-solid border-white w-24 h-24" />
        <div className="ml-8">
          <h2 className="font-lobster text-2xl mb-2">{`${firstname} ${lastname}`}</h2>
          <Link to={`/profile/${username}/edit`} style={style}> Edit profile</Link>
        </div>
      </div>
    </div>
  )
}

BigProfile.propTypes = {
  profile: PropTypes.objectOf(PropTypes.string).isRequired
}

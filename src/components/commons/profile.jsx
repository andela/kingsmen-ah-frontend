import React from 'react';
import ProfileCard from '@components/commons/Cards/profileCard';

export default function Profile() {
  return (
    <ProfileCard time='3 mins' name='John Doe' averageRating={4} src='https://i.imgur.com/RXZayES.jpg' />
  );
}

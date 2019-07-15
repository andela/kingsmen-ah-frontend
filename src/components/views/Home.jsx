import React from 'react';
import Header from '@components/commons/Header';

const user = {
  isAuthenticated: true,
  username: 'Macco'
};

const profile = {
  firstname: 'Emmanuel',
  lastname: 'Okwara',
  avatar: './public/img/logo.png'
};

export default function Home() {
  return (
    <div className='bg-gray-100 font-sans w-full min-h-screen m-0'>
      <Header user={user} profile={profile} />
    </div>
  );
}

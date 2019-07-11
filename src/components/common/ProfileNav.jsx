import React from 'react';
import { Link } from 'react-router-dom';
import './Common.scss';

function ProfileNav() {
  return (
    <nav className="center-item border-b-2 font-sans small-font-size ">
      <Link to="/profile/:profileId" className="mr-8 text-gray text-sm font-thin hover:font-bold hover-b">Profile</Link>
      <Link to="/articles/:userId" className="mr-8 text-gray text-sm font-thin hover:font-bold hover-b active">Article</Link>
      <Link to="/bookmarks/userId" className="text-gray text-sm font-thin hover:font-bold hover-b">Bookmarks</Link>
    </nav>
  )
}
export default ProfileNav;
